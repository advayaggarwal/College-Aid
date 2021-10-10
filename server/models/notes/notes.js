const mongoose = require("mongoose");

const noteSchema = {
    email: {
        type: String,
        trim: true,
        unique: true,
        required: [true, 'Email address is required']
    },
    link: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: true
    }
};

const Note = new mongoose.model("Note", noteSchema);

module.exports = Note;