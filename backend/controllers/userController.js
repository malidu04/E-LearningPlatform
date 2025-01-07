const Course = require("../models/Course");
const Progress = require("../models/Progress");
const User = require("../models/User");

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if(existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const newUser = new User({ name, email, password });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if(!user || user.password !== password) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        res.status(200).json({ message: 'Login Successful', user });
    } catch (error) {
        res.status(500).json({ message: 'Error Logging in', error });
    }
};

const getEnrolledCourses = async (req, res) => {
    const userId = req.params.userId;

    try {
        const user = await User.findById(userId).populate('enrolledCourses');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ enrolledCourses: user.enrolledCourses });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching enrolled courses', error });
    }
};

module.exports = { registerUser, loginUser, getEnrolledCourses };