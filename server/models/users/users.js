const mongoose = require("mongoose");

const userSchema = {
    email: {
        type: String,
        trim: true,
        unique: true,
        required: [true, 'Email address is required']
    },
    password: {
        type: String,
        required: true
    },
};

const User = new mongoose.model("User", userSchema);

module.exports = User;