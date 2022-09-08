const database = require("../db/database");
let ObjectId = require("mongodb").ObjectId;
let db;

const editor = {
    getAllData: async function getAllData(req, res) {
        try {
            db = await database.getDb();

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
            db = await database.getDb();
            const data = await db.collection.insertOne({
                title: req.body.title,
                content: req.body.content,
            });

            if (data.acknowledged === true) {
                return res.status(201).json({ message: "Data inserted" });
            } else {
                return res.status(500).json({ message: "Data not inserted" });
            }
        } catch (error) {
            return res.status(500).json({ message: error.message });
        } finally {
            await db.client.close();
        }
    },
    updateById: async function updateById(req, res) {
        try {
            console.log(req.params.id);
            db = await database.getDb();
            const data = await db.collection.updateOne(
                { _id: ObjectId(req.params.id) },
                { $set: { title: req.body.title, content: req.body.content } }
            );

            if (data.modifiedCount) {
                return res.status(200).json({ data: data });
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
            db = await database.getDb();
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
            db = await database.getDb();
            await db.collection.deleteMany({});

            return res.status(200).json({ message: "Data deleted" });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        } finally {
            await db.client.close();
        }
    },
};

module.exports = editor;
