/**
 * Code Controller
 */

const codeModel = require("../models/code.model.js");

// Create and Save a new Code

const codeController = {
    getAllCode: async function (req, res) {
        try {
            const data = await codeModel.getAllCode();

            if (data) {
                return res.status(200).json({ data });
            } else {
                return res.status(404).json({ message: "No code found" });
            }
        } catch (error) {
            return res.status(500).json({
                error: error.message,
            });
        }
    },
    saveCode: async function (req, res) {
        try {
            const { author, code } = req.body;

            console.log(req.body);

            if (!author || !code) {
                return res.status(400).json("Missing author or code");
            }

            const data = await codeModel.insertCode({
                author: author,
                code: code,
            });

            if (data.insertedId) {
                return res
                    .status(201)
                    .json({ codeDocumentId: data.insertedId });
            }

            return res.status(500).json("Error saving code");
        } catch (error) {
            return res.status(500).json({
                error: error.message,
            });
        }
    },
    getCodeByUserEmail: async function (req, res) {
        try {
            const { email } = req.params;

            if (!email) {
                return res.status(400).json("Missing email");
            }

            const data = await codeModel.getCodeByUserEmail(email);

            if (data) {
                return res.status(200).json({ data });
            }

            return res.status(404).json("No code found");
        } catch (error) {
            return res.status(500).json({
                error: error.message,
            });
        }
    },
};

module.exports = codeController;
