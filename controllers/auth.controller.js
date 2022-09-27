/**
 * Authentication controller
 */
const bcrypt = require("bcryptjs");

const database = require("../db/database");
const usersCollection = "users";

let db;

const authController = {
    registerUser: async (req, res) => {
        try {
            const { email, password } = req.body;

            if (!email || !password) {
                return res.status(400).json({
                    message: "Missing email or password",
                });
            }

            db = await database.getDb(usersCollection);
            const user = await db.collection.findOne({ email });

            if (user) {
                console.log(user);
                return res.status(400).json({ message: "User already exists" });
            }

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const newUser = {
                email: email,
                password: hashedPassword,
            };

            const result = await db.collection.insertOne(newUser);

            if (result.insertedId) {
                return res.status(201).json({
                    message: "User created",
                    user: {
                        id: result.insertedId,
                        email: email,
                    },
                });
            }
            return res.status(500).json({ message: "Something went wrong" });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Something went wrong" });
        } finally {
            await db.client.close();
        }
    },
};

module.exports = authController;
