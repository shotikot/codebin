const mongoose = require("mongoose");

const binSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true
    },
    mode: {
        type: String,
        required: true,
    },
    filename: {
        type: String,
        required: true
    },
    private:{
        type: Boolean,
        default: false
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('bins', binSchema)