const Course = require("../models/Course");
const User = require("../models/User");

const createCourse = async (req, res) => {
    const { title, description, videoUrl } = req.body;
    try {
        const newCourse = new Course({ title, description, videoUrl });
        await newCourse.save();

        res.status(201).json({ message: 'Course created successfully', course: newCourse });
    } catch (error) {
        res.status(500).json({ message: 'Error creating course', error });
    }
};

const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json({ courses });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching courses', error });
    }
};

const enrollCourse = async (req, res) => {
    const { userId, courseId } = req.body;
    try {
        const user = await User.findById(userId);
        const course = await Course.findById(courseId);

        if(!user || !course) {
            return res.status(404).json({ message: 'User or Course not found' });
        }

        user.enrolledCourses.push(courseId);
        await user.save();

        res.status(200).json({ message: 'Enrolled in course successfully', user });
    } catch (error) {
        res.status(500).json({ message: 'Error enrolling in course', error });
    }
};

module.exports = { createCourse, getAllCourses, enrollCourse };