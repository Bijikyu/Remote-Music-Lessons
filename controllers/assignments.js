const Assignment = require('../models/assignment');
const Session = require('../models/session');

function create(req, res){ 
    req.body.createdBy = req.user._id;
    Assignment.create(req.body, function(err) {
        if (err) return res.redirect('/assignments/new');
        res.redirect('/assignments');
    }); 
}

function deleteAssignment(req, res) {
    Assignment.findById(req.params.id, function(err, assignment) {
        if (!assignment.createdBy.equals(req.user._id)){
            res.redirect('/assignments');
        }
        else {
            Assignment.findByIdAndDelete(req.params.id, function(err){
                res.redirect('/assignments');
            });
        }
    })
}

function edit(req, res) {
    Assignment.findById(req.params.id, function(err, assignment){
        if(!assignment.createdBy.equals(req.user._id)){
            return res.redirect('/assignments');
        }
        else {        
            if (err) return res.redirect('/assignments');
            res.render('assignments/edit', { assignment });
        }
    });
}

function index(req, res) {
    if(!req.user){
        res.redirect('/');
    }
    else{
        Assignment.find({}, function(err, assignments) {
            res.render('assignments/index', { assignments });
        });
    }
}

function newAssignment(req,res){
    res.render('assignments/new');
}

function show(req, res) {
    Assignment.findById(req.params.id, function(err, assignment){
        if (err) return res.redirect('/assignments');
        res.render('assignments/show', { assignment });
    });
}

function update(req, res) {
    Assignment.findByIdAndUpdate(req.params.id, req.body, function(err, assignment){
        res.redirect(`/assignments/${req.params.id}`); 
    });
}

module.exports = {
    index,
    new: newAssignment,
    create,
    show,
    delete: deleteAssignment,
    edit,
    update
};