const mongoose = require('mongoose'); //require database
const Schema = mongoose.Schema;

const assignmentSchema = new Schema({ 
    title: String,
    text: String, 
    link: String,
    complete: {
        type: Boolean,
        default: false
    },
    instructor: {
        type: String,
        default: "Pat"
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, { 
    timestamps: true 
});

//Compile schema & export
module.exports = mongoose.model('Assignment', assignmentSchema);