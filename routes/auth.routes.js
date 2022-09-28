/**
 * Authentication routes
 */
const router = require("express").Router();

const { registerUser, loginUser } = require("../controllers/auth.controller");

// POST /auth/register - register a new user
router.post("/register", registerUser);

// POST /api/auth/login - Login a user
router.post("/login", loginUser);

module.exports = router;
