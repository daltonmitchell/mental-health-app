const Mood = require('../models/mood');
const Reflection = require('../models/reflection');

module.exports = {
    new: newMood,
    create,
    show,
    addReflection,
    edit,
    update,
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
    Mood.findById(req.params.id).populate('reflection').exec(function(err, mood){
            console.log(mood);
            res.render('moods/show', { mood })
    });
}

function addReflection(req, res){
    Mood.findById(req.params.id, function(err, mood){
        req.body.newMood = parseInt(req.body.newMood);
        let newReflection = new Reflection(req.body);
        newReflection.save();
        mood.reflection = newReflection._id;
        mood.save();
        res.redirect(`/moods/${mood._id}`);
    });
}

function edit(req, res){
    Mood.findById(req.params.id, function(err, mood){
        res.render('moods/edit', { mood });
    });
}

function update(req, res){
    req.body.moodRating = parseInt(req.body.moodRating);
    Mood.findByIdAndUpdate(req.params.id, req.body, function(err, mood){
        if(err) console.log(err);
        console.log(mood);
        res.redirect(`/moods/${mood._id}`)
    });
}