const mongoose = require('mongoose');
let userSchema = mongoose.Schema({
    userId: String,
    userName: String,
    userEmail: String,
    userPassword: String,
    userDob: String,
    userPhone: String
})

module.exports = mongoose.model('users', userSchema, 'users')