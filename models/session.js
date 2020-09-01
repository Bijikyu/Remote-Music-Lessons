const mongoose = require('mongoose'); //require database
const Schema = mongoose.Schema;

const sessionSchema = new Schema({ 
    subject: String, 
    when: {
        type: Date,
        required: true
    },
    duration: Number, 
    instructor: {
        type: String, //TODO Change to objectId after instructor schema/model
        default: 'Patrick'
    },  
    specialInstructions: String,
    assignments: [{
        type: Schema.Types.ObjectId,
        ref: 'Assignment'
    }] 
}, { 
    timestamps: true 
});

//Compile schema & export
module.exports = mongoose.model('Session', sessionSchema);