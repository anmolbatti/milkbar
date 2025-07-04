const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    images: {
        type: [String],
        required: true
    },
    video: {
        type: String
    },
    tabId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'tabs',
        required: true
    },
    featuredImage: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Project', ProjectSchema);
