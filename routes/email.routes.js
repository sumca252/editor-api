/**
 * Email Routes
 */

const routes = require("express").Router();

const { sendEmail } = require("../controllers/email.controller");

// POST /api/email - Send email
routes.post("/", sendEmail);

module.exports = routes;
