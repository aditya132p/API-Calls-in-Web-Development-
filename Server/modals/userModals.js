const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: {
        type : String,
        required: [true," Name is Requried"],
        trim: true

    },
    email: {
        type : String,
        required: [true," Email is Requried"],
        unique: true

    }
})

module.exports = mongoose.model("User", userSchema)