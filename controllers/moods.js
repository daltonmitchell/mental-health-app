const Mood = require('../models/mood');

module.exports = {
    new: newMood,
    create,
};

function newMood(req, res){
    res.render('moods/new');
}

function create(req, res) {
    req.body.moodRating = parseInt(req.body.moodRating);
    const mood = new Mood(req.body);
    mood.save(function(err){
        if(err) return res.redirect('/moods/new');
        console.log(mood);
        Mood.find({}, function(err, moods) {
            res.render('moods/index', { moods });
        });
    });
}