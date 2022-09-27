const database = require("../db/database");
const defaultUsers = require("../db/users.json");

const usersCollection = "users";
const documentsCollection = "documents";

let db;

const usersController = {
    getAuthoredByUser: async (req, res) => {
        try {
            const { email } = req.params;

            console.log(email);

            // Get all documents authored by the user
            db = await database.getDb(documentsCollection);
            const data = await db.collection.find({ author: email }).toArray();

            if (!data) {
                return res.status(404).json({ message: "No data found" });
            }

            return res.status(200).json({ data: data });
        } catch (error) {
            return res
                .status(500)
                .json({ status: 500, message: error.message });
        } finally {
            await db.client.close();
        }
    },
    resetUsersCollection: async (req, res) => {
        try {
            db = await database.getDb(usersCollection);
            await db.collection.deleteMany({});

            // insert many and return inserted documents
            const result = await db.collection.insertMany(defaultUsers);

            if (result.deletedCount === 0) {
                return res.status(400).json({
                    message: "No users found",
                });
            }

            return res.status(200).json({
                insertedIds: result.insertedIds,
                message: "Users collection reset",
            });
        } catch (error) {
            return res.status(500).json({
                message: error.message,
            });
        } finally {
            await db.client.close();
        }
    },
};

module.exports = usersController;
