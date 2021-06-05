const { Int32 } = require('bson');
const mongoose = require('mongoose');
const User = require('../models/user')
//Creating a schema connected to mongoose
const Schema = mongoose.Schema;

//Creating a new schemea with the required fields
const userSchema = new Schema({
    Email: String,
    Password: String,
    IsAdmin: Boolean,
    //The token field is a number with a default value of 1
    Token: {
        type: Number,
        default: 1
    }
});

//Exporting the model
module.exports = mongoose.model('user', userSchema, 'User')