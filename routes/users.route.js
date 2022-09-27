/**
 * Users Route
 */
const router = require("express").Router();

const { getAuthoredByUser } = require("../controllers/users.controller");

// GET /api/users/author/:email - Get all documents authored by a user
router.get("/author/:email", getAuthoredByUser);

module.exports = router;
