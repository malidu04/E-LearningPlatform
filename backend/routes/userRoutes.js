const express = require("express");
const { registerUser, loginUser, getEnrolledCourses } = require("../controllers/userController");


const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/:userId/enrolled-courses', getEnrolledCourses);


module.exports = router;