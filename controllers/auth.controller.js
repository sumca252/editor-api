/**
 * Authentication controller
 */
const usersModel = require("../models/users.model");

const authController = {
    registerUser: async (req, res) => {
        try {
            const { email, password } = req.body;

            if (!email || !password) {
                return res.status(400).json({
                    message: "Missing email or password",
                });
            }

            const user = await usersModel.getUserByEmail(email);

            if (user) {
                return res.status(409).json({ message: "User already exists" });
            }

            const newUser = await usersModel.createUser(email, password);

            if (newUser) {
                return res.status(201).json({
                    message: "User created",
                    user: {
                        id: newUser.insertedId,
                        email: email,
                    },
                });
            }

            return res.status(500).json({ message: "Something went wrong" });
        } catch (error) {
            return res.status(500).json({ message: "Something went wrong" });
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

            const user = await usersModel.getUserByEmail(email);

            if (!user) {
                return res
                    .status(400)
                    .json({ status: 400, message: "User does not exist" });
            }

            const isPasswordValid = await usersModel.validatePassword(
                password,
                user.password
            );

            if (!isPasswordValid) {
                return res
                    .status(400)
                    .json({ status: 400, message: "Invalid password!" });
            }

            const token = await usersModel.generateToken(user);

            if (token) {
                return res.status(200).json({
                    status: 200,
                    user: {
                        id: user._id,
                        email: user.email,
                        token: token,
                    },
                });
            }

            return res.status(500).json({
                message: "Internal server error",
            });
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    },
};

module.exports = authController;
