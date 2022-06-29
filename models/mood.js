const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moodSchema = new mongoose.Schema({
    moodRating: {
        type: Number,
        min: 1,
        max: 10
    },
    excitements: {
        type: String
    },
    dreads: {
        type: String
    },
    goals: {
        type: String
    },
    journal: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Mood', moodSchema);