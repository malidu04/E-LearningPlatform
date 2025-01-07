const mongoose = require("mongoose");

const progressSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
        required: true
    },
    completedVideos: [{
        type: String
    }],
    lastWatched: {
        type: String
    },
});

module.exports = mongoose.model("Progress", progressSchema);