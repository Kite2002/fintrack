const { Router } = require("express");
const bcrypt = require("bcrypt");
const { User } = require("../models/index");
const { config } = require("dotenv");
const jwt = require("jsonwebtoken");

config();

const router = Router();

router.post("/", async (req, res) => {
    // Create an user from the request body
    const { username, password } = req.body;
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create the user
    const user = await User.create({ username, password: hashedPassword });

    res.status(201);

    // Create a token
    const token = jwt.sign(
        {
            username: user.username,
            id: user._id,
        },
        process.env.JWT_SECRET,
    );

    // Send the token in the response
    res.json({ token });
});

router.post("/login", async (req, res) => {
    // Get the user from the request body
    const { username, password } = req.body;
    // Find the user in the database
    const user = await User.findOne({ username });
    // If the user is not found, return an error
    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }
    // Check if the password is correct
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    // If the password is incorrect, return an error
    if (!isPasswordCorrect) {
        return res.status(400).json({ error: "Password is incorrect" });
    }

    // Create a token
    const token = jwt.sign(
        {
            username: user.username,
            id: user._id,
        },
        process.env.JWT_SECRET,
    );

    // Send the token in the response
    res.json({ token });
});

module.exports = router;