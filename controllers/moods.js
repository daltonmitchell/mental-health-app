const Mood = require('../models/mood');
const Reflection = require('../models/reflection');

module.exports = {
    new: newMood,
    create,
    show,
    addReflection,
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

function show(req, res){
    Mood.findById(req.params.id, function(err, mood){
        res.render('moods/show', { mood });
    });
}

function addReflection(req, res){
    Mood.findById(req.params.id, function(err, mood){
        req.body.newMood = parseInt(req.body.newMood);
        let newReflection = new Reflection(req.body);
        console.log(newReflection);
        newReflection.save();
        console.log(mood);
    })
}