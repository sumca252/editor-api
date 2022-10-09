/**
 * Comments Route
 */

const {
    insertComment,
    getAllComments,
    getCommentsByDocumentId,
    deleteAllComments,
} = require("../controllers/comments.controller");

const router = require("express").Router();

// POST /api/comments/ - insert a comment
router.post("/", insertComment);

// GET /api/comments - get all comments
router.get("/", getAllComments);

// GET /api/comments/:documentId - get all comments for a document
router.get("/:documentId", getCommentsByDocumentId);

// DELETE /api/comments - delete all comments
router.delete("/", deleteAllComments);
module.exports = router;
