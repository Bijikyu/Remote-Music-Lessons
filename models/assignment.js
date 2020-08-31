const mongoose = require('mongoose'); //require database
const Schema = mongoose.Schema;

const assignmentSchema = new Schema({ 
    title: String,
    text: String, 
    link: String,
    complete: Boolean,
    instructor: {
        type: String,
        default: "Pat"
    }
}, { 
    timestamps: true 
});

//Compile schema & export
module.exports = mongoose.model('Assignment', assignmentSchema);