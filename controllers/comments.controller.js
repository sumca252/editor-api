/**
 * Comments Controller
 */

const CommentsModel = require("../models/comments.model");

const CommentsController = {
    insertComment: async (req, res) => {
        try {
            const { documentId, author, range, comment } = req.body;

            if (!documentId || !author || !range || !comment) {
                return res.status(400).json({
                    message:
                        "Missing fields documentId, author, range or comment",
                });
            }

            const data = await CommentsModel.insertComment({
                documentId: documentId,
                author: author,
                range: range,
                comment: comment,
            });

            if (data.insertedId) {
                return res
                    .status(201)
                    .json({ id: data.insertedId, message: "Comment inserted" });
            }

            return res.status(500).json({ message: "Comment not inserted" });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },
    getAllComments: async (req, res) => {
        try {
            const result = await CommentsModel.getAllComments();

            if (result) {
                return res.status(200).json({ data: result });
            }
            return res.status(404).json({ message: "No comments found" });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },
    getCommentsByDocumentId: async (req, res) => {
        try {
            const { documentId } = req.params;

            if (!documentId) {
                return res.status(400).json({
                    message: "Missing documentId",
                });
            }

            const result = await CommentsModel.getCommentsByDocumentId(
                documentId
            );

            if (result) {
                return res.status(200).json({ data: result });
            }
            return res.status(404).json({ message: "No data found" });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },
    deleteAllComments: async (req, res) => {
        try {
            const result = await CommentsModel.deleteAllComments();

            if (result) {
                return res.status(200).json({ message: "Comments deleted" });
            }
            return res.status(404).json({ message: "No comments found" });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },
};

module.exports = CommentsController;
