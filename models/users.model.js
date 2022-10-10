/**
 * Users Model
 *
 */
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const database = require("../db/database");
const defaultUsers = require("../db/users.json");
let ObjectId = require("mongodb").ObjectId;

const usersCollection = "users";
const documentsCollection = "documents";
let db;

const usersModel = {
    getAllUsers: async () => {
        try {
            db = await database.getDb(usersCollection);
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
    getUserByEmail: async (email) => {
        try {
            db = await database.getDb(usersCollection);
            const user = await db.collection.findOne({ email });

            if (user) {
                return user;
            }
            return false;
        } catch (error) {
            throw new Error(error.message);
        } finally {
            await db.client.close();
        }
    },
    getDocumentsAuthoredByUser: async (email) => {
        try {
            db = await database.getDb(documentsCollection);
            const data = await db.collection.find({ author: email }).toArray();

            if (data.length === 0) {
                return false;
            }
            return data;
        } catch (error) {
            throw new Error(error.message);
        } finally {
            await db.client.close();
        }
    },
    shareDocumentWithUser: async (documentId, email) => {
        try {
            db = await database.getDb(documentsCollection);
            const document = await db.collection.findOne({
                _id: ObjectId(documentId),
            });

            if (document) {
                const sharedWith = document.allowed_users;

                if (sharedWith.includes(email)) {
                    return false;
                }

                sharedWith.push(email);

                const updatedDocument = await db.collection.findOneAndUpdate(
                    { _id: document._id },
                    { $set: { allowed_users: sharedWith } },
                    { returnOriginal: false }
                );

                return updatedDocument.value;
            }
            return false;
        } catch (error) {
            throw new Error(error.message);
        } finally {
            await db.client.close();
        }
    },

    getDocumentsSharedWithUser: async (email) => {
        try {
            db = await database.getDb(documentsCollection);
            const documents = await db.collection
                .find({
                    allowed_users: email,
                })
                .toArray();

            if (documents.length === 0) {
                return false;
            }
            return documents;
        } catch (error) {
            throw new Error(error.message);
        } finally {
            await db.client.close();
        }
    },
    createUser: async (email, password) => {
        try {
            db = await database.getDb(usersCollection);
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const newUser = {
                email: email,
                password: hashedPassword,
            };

            const data = await db.collection.insertOne(newUser);

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
    generateToken: async (user) => {
        try {
            const token = await jwt.sign(
                {
                    email: user.email,
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: "1h",
                }
            );

            if (token) {
                return token;
            }
            return false;
        } catch (error) {
            throw new Error(error.message);
        }
    },
    validatePassword: async (password, hashedPassword) => {
        try {
            const isValid = await bcrypt.compare(password, hashedPassword);

            if (isValid) {
                return true;
            }
            return false;
        } catch (error) {
            throw new Error(error.message);
        }
    },
    resetUsers: async () => {
        try {
            db = await database.getDb(usersCollection);
            await db.collection.deleteMany({});
            const result = await db.collection.insertMany(defaultUsers);

            if (result.insertedCount > 0) {
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

module.exports = usersModel;
