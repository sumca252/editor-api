const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

require("dotenv").config();

const app = express();

const port = process.env.PORT || 3000;

app.use(cors());
app.disable("x-powered-by");

// don't show the log when it is test
if (process.env.NODE_ENV !== "test") {
    // use morgan to log at command line
    app.use(morgan("combined")); // 'combined' outputs the Apache style LOGs
}

// parse application/json
app.use(express.json());

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/editor", require("./routes/editor.routes"));

const server = app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = server;
