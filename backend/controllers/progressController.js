const Progress = require("../models/Progress");

const updateProgress = async (req, res) => {
    const { userId, courseId, progress } = req.body;

    try {
        let progressRecord = await Progress.findOne({ userId, courseId });

        if(!progressRecord) {
            progressRecord = new Progress({ userId, courseId, progress });
        } else {
            progressRecord.progress = progress;
        }

        await progressRecord.save();
        res.status(200).json({ message: 'Progress updated successfully', progressRecord });
    } catch (error) {
        res.status(500).json({ message: 'Error updating progress', error });
    }
};

const getProgress = async (req, res) => {
    const { userId, courseId } = req.params;

    try {
        const progress = await Progress.findOne({ userId, courseId });
        if(!progress) {
            return res.status(404).json({ message: 'Progress not found '});
        }

        res.status(200).json({ progress });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching progress', error });
    }
};

module.exports = { updateProgress, getProgress }; 