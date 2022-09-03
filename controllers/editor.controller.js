const database = require("../db/database");
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
};

module.exports = editor;
