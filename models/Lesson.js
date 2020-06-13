const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema; //used to refer to the schema that we want

var lessonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 32,
        trim: true          //trims the extra spaces that comes up
    }
})

module.exports = mongoose.model("Lesson", lessonSchema);
