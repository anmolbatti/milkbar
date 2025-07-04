const mongoose = require('mongoose');

const TabsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('tabs', TabsSchema);
