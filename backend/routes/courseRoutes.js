const express = require('express');
const { enrollCourse, createCourse, getAllCourses } = require('../controllers/courseController');

const router = express.Router();

router.post('/create', createCourse);
router.get('/', getAllCourses);
router.post('/enrol', enrollCourse);

module.exports = router;