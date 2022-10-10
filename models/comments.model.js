/**
 * Comments Model
 *
 */
const database = require("../db/database");
const commentsCollection = "comments";
let db;

const CommentsModel = {
    insertComment: async function insertComment(comment) {
        try {
            db = await database.getDb(commentsCollection);

            const result = await db.collection.insertOne(comment);

            if (result) {
                return result;
            }
            return false;
        } catch (error) {
            throw new Error(error);
        } finally {
            await db.client.close();
        }
    },
    getAllComments: async function () {
        try {
            db = await database.getDb(commentsCollection);
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
    getCommentsByDocumentId: async function (documentId) {
        try {
            db = await database.getDb(commentsCollection);
            const data = await db.collection
                .find({ documentId: documentId })
                .toArray();

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
    deleteAllComments: async function () {
        try {
            db = await database.getDb(commentsCollection);
            const result = await db.collection.deleteMany({});

            if (result) {
                return result;
            }
            return false;
        } catch (error) {
            throw new Error(error.message);
        } finally {
            await db.client.close();
        }
    },
};

module.exports = CommentsModel;
