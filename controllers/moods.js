const Mood = require('../models/mood');

module.exports = {
    new: newMood,
};

function newMood(req, res){
    res.render('moods/new');
}