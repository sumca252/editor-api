/**
 * Editor Model
 *
 */
const database = require("../db/database");
let ObjectId = require("mongodb").ObjectId;
const defaults = require("../db/defaults.json");
const documentsCollection = "documents";
let db;

const editorModel = {
    /**
     * Get All Documents
     * @returns  {Object}  - represents an array of documents
     */
    getAllDocuments: async () => {
        try {
            db = await database.getDb(documentsCollection);
            const data = await db.collection.find({}).toArray();

            if (data.length > 0) {
                return data;
            }
            return false;
        } catch (error) {
            throw new Error(error.message);
        } finally {
            await db.client.close();
        }
    },
    /**
     * Create a new document
     */
    createDocument: async (newDocument) => {
        try {
            db = await database.getDb(documentsCollection);
            const data = await db.collection.insertOne(newDocument);

            if (data.insertedId) {
                return data;
            }
            return false;
        } catch (error) {
            throw new Error(error.message);
        } finally {
            await db.client.close();
        }
    },
    updateDocumentById: async (document) => {
        try {
            db = await database.getDb(documentsCollection);
            const data = await db.collection.updateOne(
                { _id: ObjectId(document.documentId) },
                {
                    $set: {
                        title: document.title,
                        content: document.content,
                        allowed_users: document.allowedUsers,
                    },
                }
            );

            if (data.modifiedCount > 0) {
                return true;
            }
            return false;
        } catch (error) {
            throw new Error(error.message);
        } finally {
            await db.client.close();
        }
    },
    getDocumentById: async (documentId) => {
        try {
            db = await database.getDb(documentsCollection);
            const data = await db.collection.findOne({
                _id: ObjectId(documentId),
            });

            if (data) {
                return data;
            }
            return false;
        } catch (error) {
            throw new Error(error.message);
        } finally {
            await db.client.close();
        }
    },
    resetAllDocuments: async () => {
        try {
            db = await database.getDb(documentsCollection);
            await db.collection.deleteMany({});
            const data = await db.collection.insertMany(defaults);

            if (data.insertedCount > 0) {
                return true;
            }
            return false;
        } catch (error) {
            throw new Error(error.message);
        } finally {
            await db.client.close();
        }
    },
};

module.exports = editorModel;
