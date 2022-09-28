const database = require("../db/database");
let ObjectId = require("mongodb").ObjectId;
const defaults = require("../db/defaults.json");
const documentsCollection = "documents";
let db;

const editor = {
    getAllData: async function getAllData(req, res) {
        try {
            db = await database.getDb(documentsCollection);

            const data = await db.collection.find({}).toArray();

            if (data.length > 0) {
                return res.status(200).json({ data: data });
            } else {
                return res.status(404).json({ message: "No data found" });
            }
        } catch (error) {
            return res.status(500).json({ message: error.message });
        } finally {
            await db.client.close();
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

            db = await database.getDb(documentsCollection);
            const data = await db.collection.insertOne({
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
        } finally {
            await db.client.close();
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

            db = await database.getDb(documentsCollection);
            const data = await db.collection.updateOne(
                { _id: ObjectId(req.params.id) },
                {
                    $set: {
                        title: title,
                        content: content,
                        allowed_users: [email],
                    },
                }
            );

            if (data.modifiedCount) {
                return res.status(200).json({ message: "Data updated" });
            } else {
                return res.status(500).json({ message: "Data not updated" });
            }
        } catch (error) {
            return res.status(500).json({ message: error.message });
        } finally {
            await db.client.close();
        }
    },
    getOneById: async function getOneById(req, res) {
        try {
            db = await database.getDb(documentsCollection);
            const data = await db.collection.findOne({
                _id: ObjectId(req.params.id),
            });

            if (data) {
                return res.status(200).json({ data: data });
            } else {
                return res.status(404).json({ message: "No data found" });
            }
        } catch (error) {
            return res.status(500).json({ message: error.message });
        } finally {
            await db.client.close();
        }
    },
    deleteAllData: async function deleteAllData(req, res) {
        try {
            db = await database.getDb(documentsCollection);
            await db.collection.deleteMany({});

            await db.collection.insertMany(defaults);

            return res
                .status(200)
                .json({ message: "Data deleted and inserted defaults" });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        } finally {
            await db.client.close();
        }
    },
};

module.exports = editor;
