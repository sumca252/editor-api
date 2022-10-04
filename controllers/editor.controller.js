/**
 * Editor controller
 */
const editorModel = require("../models/editor.models");

const editorController = {
    getAllData: async function getAllData(req, res) {
        try {
            const result = await editorModel.getAllDocuments();

            if (result) {
                return res.status(200).json({ data: result });
            }
            return res.status(404).json({ message: "No data found" });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },
    insertData: async function insertData(req, res) {
        try {
            const { title, content, author, email } = req.body;

            if (!title || !content || !author) {
                return res.status(400).json({
                    message: "Missing fields title, content or author",
                });
            }

            const data = await editorModel.createDocument({
                title: title,
                content: content,
                author: author,
                allowed_users: [email],
            });

            if (data.insertedId) {
                return res
                    .status(201)
                    .json({ id: data.insertedId, message: "Data inserted" });
            }
            return res.status(500).json({ message: "Data not inserted" });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },
    updateById: async function updateById(req, res) {
        try {
            console.log(req.params.id);
            const { title, content, email } = req.body;

            if (!title || !content) {
                return res.status(400).json({
                    message: "Missing fields title or content",
                });
            }

            const data = await editorModel.updateDocumentById({
                documentId: req.params.id,
                title: title,
                content: content,
                allowedUsers: [email],
            });

            if (data) {
                return res.status(200).json({ message: "Data updated" });
            }
            return res.status(500).json({ message: "Data not updated" });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },
    getOneById: async function getOneById(req, res) {
        try {
            const data = await editorModel.getDocumentById(req.params.id);

            if (data) {
                return res.status(200).json({ data: data });
            }
            return res.status(404).json({ message: "No data found" });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },
    deleteAllData: async function deleteAllData(req, res) {
        try {
            const result = await editorModel.resetAllDocuments();

            if (result) {
                return res
                    .status(200)
                    .json({ message: "Data deleted and inserted defaults" });
            }
            return res.status(500).json({ message: "Data not deleted" });
        } catch (error) {
            return res.status(500).json({
                message: error.message,
            });
        }
    },
};

module.exports = editorController;
