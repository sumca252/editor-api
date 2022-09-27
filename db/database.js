const mongo = require("mongodb").MongoClient;

const database = {
    getDb: async function getDb(collectionName) {
        let dsn =
            process.env.MONGODB_URI || "mongodb://localhost:27017/documents";

        if (process.env.NODE_ENV === "test") {
            dsn = "mongodb://localhost:27017/test";
        }

        const client = await mongo.connect(dsn, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        const db = await client.db();
        const collection = await db.collection(collectionName);

        return {
            db: db,
            collection: collection,
            client: client,
        };
    },
};

module.exports = database;
