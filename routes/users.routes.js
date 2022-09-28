/**
 * Users Route
 */
const router = require("express").Router();

const {
    getAuthoredByUser,
    getSharedWithUser,
    resetUsersCollection,
} = require("../controllers/users.controller");

// GET /api/users/author/:email - Get all documents authored by a user
router.get("/author/:email", getAuthoredByUser);

// GET /api/users/shared/:email - Get the documents shared with that
router.get("/shared/:email", getSharedWithUser);

// DELETE /api/users - Reset the users collection
router.delete("/reset", resetUsersCollection);

module.exports = router;
