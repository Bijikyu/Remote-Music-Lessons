const mongoose = require('mongoose'); //require database
const Schema = mongoose.Schema;

const userSchema = new Schema({ 
    property1: String, //TODO: assign properties and include OAuth string
    googleId: String
}, { 
    timestamps: true 
});

//Compile schema & export
module.exports = mongoose.model('User', userSchema);