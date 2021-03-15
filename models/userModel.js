const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A user should be a name']
    },
    age: {
        type: String,
        rqquired: [true, 'Please! Provide Your gender.']
    },
    age: Number,
    phone: {
        type: String,
        unique: [true, 'Mobile Number already exist.']
    },
    email: {
        type: String,
        unique: [true, 'Mobile Number already exist.']
    }
});

module.exports = mongoose.model('User', UserSchema);