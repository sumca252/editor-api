/**
 * Authentication routes
 */
const router = require("express").Router();

const { registerUser } = require("../controllers/auth.controller");

// POST /auth/register - register a new user
router.post("/register", registerUser);

module.exports = router;
