const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    theme: { type: String, required: true }
});

module.exports = mongoose.model('Email', emailSchema);
