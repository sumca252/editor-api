/**
 * Email Controller
 */
const formData = require("form-data");
const Mailgun = require("mailgun.js");
const usersModel = require("../models/users.model");
const mg = new Mailgun(formData);

const client = mg.client({
    username: "api",
    key: process.env.MAILGUN_API_KEY,
});

const emailController = {
    sendEmail: async (req, res) => {
        const { from, to, documentId } = req.body;
        console.log(req.body);

        if (!from || !to || !documentId) {
            return res.status(400).json({
                error: "Missing required fields from, to, or documentId",
            });
        }

        const data = {
            from: from,
            to: to,
            subject: "You have been invited to edit a document",
            text: `
                Email: ${from} has invited you to edit a document. 
                Please visit ${process.env.CLIENT_URL}/#/register
                to register an account.`,
        };

        try {
            const response = await client.messages.create(
                process.env.MAILGUN_DOMAIN,
                data
            );

            if (response.status === 200) {
                await usersModel.shareDocumentWithUser(documentId, to);

                return res
                    .status(200)
                    .json({ message: "Email sent successfully" });
            }

            return res
                .status(500)
                .json({ message: "Email failed to send, document not shared" });
        } catch (error) {
            return res.status(400).json(error);
        }
    },
};

module.exports = emailController;
