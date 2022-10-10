require("dotenv").config();

const port = process.env.PORT || 3000;
const express = require("express");
const session = require("express-session");
const morgan = require("morgan");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");

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

// enable cors
app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);

// enable sessions
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
    })
);

// routes
app.use("/api/editor", require("./routes/editor.routes"));
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/users", require("./routes/users.routes"));
app.use("/api/comments", require("./routes/comments.routes"));
app.use("/api/email", require("./routes/email.routes"));

// GraphQL API endpoint

const schema = require("./graphql/schema");

app.use(
    "/graphql",
    graphqlHTTP({
        graphiql: true,
        schema,
    })
);

// 404 handler - must be last route handler
app.use((req, res, next) => {
    res.status(404).json({ message: "Not found" });
    next();
});

const server = httpServer.listen(port, () => {
    console.log(`Node environment: ${process.env.NODE_ENV}`);
    console.log(`mongoDB connection string: ${process.env.MONGODB_URI}`);
    console.log(`Listening on port ${port}`);
});

module.exports = server;
