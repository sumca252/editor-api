/**
 * Users Route
 */
const router = require("express").Router();

const {
    getAuthoredByUser,
    resetUsersCollection,
} = require("../controllers/users.controller");

// GET /api/users/author/:email - Get all documents authored by a user
router.get("/author/:email", getAuthoredByUser);

// DELETE /api/users - Reset the users collection
router.delete("/reset", resetUsersCollection);

module.exports = router;
