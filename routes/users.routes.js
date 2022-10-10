/**
 * Users Route
 */
const router = require("express").Router();

const {
    getAllUsers,
    getAuthoredByUser,
    getSharedWithUser,
    resetUsersCollection,
    shareDocumentWithUser,
} = require("../controllers/users.controller");

// GET /users - get all users
router.get("/", getAllUsers);

// GET /api/users/author/:email - Get all documents authored by a user
router.get("/author/:email", getAuthoredByUser);

// GET /api/users/shared/:email - Get the documents shared with that
router.get("/shared/:email", getSharedWithUser);

// POST /api/users/share - Share a document with a user
router.post("/share", shareDocumentWithUser);

// DELETE /api/users - Reset the users collection
router.delete("/reset", resetUsersCollection);

module.exports = router;
