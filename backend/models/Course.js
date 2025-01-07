const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    videos: [
        {
            title: {
                type: String
            },
            url: {
                type: String
            },
            duration: {
                type: Number
            },
        },
    ],
    createdAt: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model("Course", courseSchema);