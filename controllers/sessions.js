const Session = require('../models/session');


function create(req, res){ 
    Session.create(req.body, function(err) {
        if (err) return res.redirect('/sessions/new');
        res.redirect('/sessions');
    }); 
}

function deleteSession(req, res) { 
    Session.findByIdAndDelete(req.params.id, function(err){
        res.redirect('/sessions'); 
    }); 
}

function edit(req, res) {
    Session.findById(req.params.id, function(err, session){
        if (err) return res.redirect('/sessions');
        res.render('sessions/edit', { session });
    });
}

function index(req, res) {
    Session.find({}, function(err, sessions) {
        res.render('sessions/index', { sessions });
    });
}

function newSession(req,res){
    res.render('sessions/new');
}


function show(req, res) {
    Session.findById(req.params.id, function(err, session){
        if (err) return res.redirect('/sessions');
        res.render('sessions/show', { session });
    });
}

function update(req, res) {
    Session.update(req.params.id, req.body);
    res.redirect(`/sessions/${req.params.id}`); 
}

module.exports = {
    index,
    new: newSession,
    create,
    show,
    delete: deleteSession,
    edit,
    update
};