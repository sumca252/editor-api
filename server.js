require("dotenv").config();

const port = process.env.PORT || 3000;
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

const httpServer = require("http").createServer(app);

const io = require("socket.io")(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});

io.sockets.on("connection", function (socket) {
    console.log(`New client connected: ${socket.id}`);

    socket.on("update-document", (documentId) => {
        console.log(
            `New client connected with id '${socket.id}' joined room: ${documentId}`
        );
        socket.join(documentId);
    });

    socket.on("send-changes", (delta, documentId) => {
        if (delta.source !== "user") {
            return;
        }

        socket.broadcast.to(documentId).emit("receive-changes", delta);
    });

    socket.on("disconnect", () => {
        console.log(`Client disconnected: ${socket.id}`);
    });
});

app.use(cors());
app.disable("x-powered-by");

// don't show the log when it is test
if (process.env.NODE_ENV !== "test") {
    // use morgan to log at command line
    app.use(morgan("dev")); // 'combined' outputs the Apache style LOGs
}

// parse application/json
app.use(express.json());

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/editor", require("./routes/editor.routes"));

// 404 handler - must be last route handler
app.use((req, res, next) => {
    res.status(404).json({ message: "Not found" });
    next();
});

const server = httpServer.listen(port, () =>
    console.log(`Listening on port ${port}`)
);

module.exports = server;
