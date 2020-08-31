const mongoose = require('mongoose'); //require database
const Schema = mongoose.Schema;

const sessionSchema = new Schema({ 
    subject: String, 
    when: Date,
    duration: Number, 
    instructor: {
        type: String, //TODO Change to objectId after instructor schema/model
        default: 'TBD'
    },  
    specialInstructions: String 
}, { 
    timestamps: true 
});

//Compile schema & export
module.exports = mongoose.model('Session', sessionSchema);