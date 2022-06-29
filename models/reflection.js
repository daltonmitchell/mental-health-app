const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reflectionSchema = new mongoose.Schema ({
    newMood: {
        type: Number
    },
    recap: {
        type: String
    },
},{
    timestamps: true 
});

module.exports = mongoose.model('Reflection', reflectionSchema);