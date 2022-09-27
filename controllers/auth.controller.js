/**
 * Authentication controller
 */
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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
    loginUser: async (req, res) => {
        try {
            const { email, password } = req.body;

            if (!email || !password) {
                return res
                    .status(400)
                    .json({ message: "Missing email or password" });
            }

            db = await database.getDb(usersCollection);
            const user = await db.collection.findOne({ email });

            if (!user) {
                return res
                    .status(400)
                    .json({ status: 400, message: "User does not exist" });
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res
                    .status(400)
                    .json({ status: 400, message: "Invalid password!" });
            }

            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
                expiresIn: "24h",
            });

            return res.status(200).json({
                status: 200,
                user: {
                    id: user._id,
                    email: user.email,
                    token: token,
                },
            });
        } catch (err) {
            return res.status(500).json({ message: err.message });
        } finally {
            await db.client.close();
        }
    },
};

module.exports = authController;
