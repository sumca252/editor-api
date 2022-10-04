/**
 * Users controller
 */
const usersModel = require("../models/users.model");

const usersController = {
    getAllUsers: async (req, res) => {
        try {
            const data = await usersModel.getAllUsers();

            if (data) {
                return res.status(200).json({ data });
            }
            return res.status(404).json({ message: "No data found" });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },
    getAuthoredByUser: async (req, res) => {
        try {
            const { email } = req.params;

            const documents = await usersModel.getDocumentsAuthoredByUser(
                email
            );

            if (documents) {
                return res.status(200).json({ data: documents });
            }

            return res.status(404).json({ message: "No data found" });
        } catch (error) {
            return res
                .status(500)
                .json({ status: 500, message: error.message });
        }
    },
    getSharedWithUser: async (req, res) => {
        try {
            const { email } = req.params;

            const documents = await usersModel.getDocumentsSharedWithUser(
                email
            );

            if (documents) {
                return res.status(200).json({ data: documents });
            }
            return res
                .status(404)
                .json({ message: "No documents found shared with that email" });
        } catch (error) {
            return res.status(500).json({
                message: "Internal server error",
                error: error.message,
            });
        }
    },
    resetUsersCollection: async (req, res) => {
        try {
            const result = await usersModel.resetUsers();

            if (result) {
                return res.status(200).json({
                    insertedIds: result.insertedIds,
                    message: "Users collection reset",
                });
            }
            return res.status(500).json({ message: "Internal server error" });
        } catch (error) {
            return res.status(500).json({
                message: error.message,
            });
        }
    },
};

module.exports = usersController;
