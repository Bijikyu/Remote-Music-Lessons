const mongoose = require('mongoose'); //require database
const Schema = mongoose.Schema;

const userSchema = new Schema({ 
    name: String,
    email: String,
    googleId: String,
    instructor: {
        type: Boolean,
        default: false
    }
}, { 
    timestamps: true 
});

//Compile schema & export
module.exports = mongoose.model('User', userSchema);