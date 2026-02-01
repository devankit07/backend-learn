// here i create schema and model for user
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
}, {timestamps: true});//timestamp will create createdAt and updatedAt field automatically

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;