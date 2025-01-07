const express = require('express');
const { updateProgress, getProgress } = require('../controllers/progressController');

const router = express.Router();

router.post('/update', updateProgress);
router.get('/:userId/:courseId', getProgress);

module.exports = router;