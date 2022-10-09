/**
 * Comments Model
 *
 */
const database = require("../db/database");
const codeCollection = "code";
let db;

const codeModel = {
    insertCode: async function insertCode(code) {
        try {
            console.log(code);
            db = await database.getDb(codeCollection);

            const result = await db.collection.insertOne(code);

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
    getAllCode: async function () {
        try {
            db = await database.getDb(codeCollection);
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
    getCodeByUserEmail: async function (email) {
        try {
            db = await database.getDb(codeCollection);
            const data = await db.collection.find({ email: email }).toArray();

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
};

module.exports = codeModel;
