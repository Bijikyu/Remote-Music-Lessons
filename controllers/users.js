const User = require('../models/user');

function edit(req,res) {
    if(!req.user){
        res.redirect('/');
    }
    else {
        User.findById(req.params.id, function(err, user){
            if (!user._id.equals(req.user._id)){
                return res.redirect('/users');
            }
            else {
                if (err) return res.redirect('/sessions');
                res.render('users/edit', { user });
            }    
        });
    }
}

function index(req, res) {
    if(!req.user){
        res.redirect('/');  
    }
    else {
        User.find({}, function(err, users) { //change to true after it all works
            res.render('users/index', { users });
        });
    }
}

function show(req, res) {
    User.findById(req.params.id, function(err, user){
        if (err) return res.redirect('/sessions');
        res.render('users/show', { user });
    });
}

function update(req, res) {
    req.body.instructor = !!req.body.instructor;
    User.findByIdAndUpdate(req.params.id, req.body, function(err, user){
        res.redirect('/users');
    }
    );
}

module.exports = {
    index,
    show,
    edit,
    update
};