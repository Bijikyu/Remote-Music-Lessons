const Session = require('../models/session');
const Assignment = require('../models/assignment');

function create(req, res){ 
    req.body.createdBy = req.user._id;
    req.body.student = req.user.name;
    Session.create(req.body, function(err) {
        if (err) return res.redirect('/sessions/new');
        res.redirect('/sessions');
    }); 
}

function deleteSession(req, res) {
    Session.findById(req.params.id, function(err, session) {
        if (!session.createdBy.equals(req.user._id) && req.user.instructor === false){
            res.redirect('/sessions');
        }
        else {
            Session.findByIdAndDelete(req.params.id, function(err){
                res.redirect('/sessions');
            });
        }
    })
}

function edit(req, res) {
    Session.findById(req.params.id)
    .populate('assignments').exec(function(err, session){
        Assignment.find({_id: {$nin: session.assignments}})
        .exec(function(err, assignments){
            if (req.user) {
            if(!session.createdBy.equals(req.user._id) && req.user.instructor === false){
                return res.redirect('/sessions');
            }
            else {
                if (err) return res.redirect('/sessions');
                console.log(session);
                res.render('sessions/edit', { session, assignments});
            }
            } else {
                return res.redirect('/sessions');
            }
        })
    });
}

function index(req, res) {
    if(!req.user){
        res.redirect('/');
    }
    else{
        Session.find({}, function(err, sessions) {
            res.render('sessions/index', { sessions });
        });
    }
}

function newSession(req,res){
    res.render('sessions/new');
}

function show(req, res) {
    Session.findById(req.params.id)
    .populate('assignments')
    .exec(
    function(err, session){
        if (err) return res.redirect('/sessions');
        res.render('sessions/show', { session });
    });
}

function update(req, res) {
    Session.findByIdAndUpdate(req.params.id, req.body, function(err, session){
        res.redirect(`/sessions/${req.params.id}`); 
    });
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