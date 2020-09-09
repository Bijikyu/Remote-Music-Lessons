const User = require('../models/user');

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

/*
function index(req, res) {
    if(!req.user){
        res.redirect('/');  
    }
    else {
        User.find({instructor: false}, function(err, users) { //change to true after it all works
            res.render('users/index', { users });
        });
    }
}
*/

function show(req, res) {
    User.findById(req.params.id, function(err, user){
        if (err) return res.redirect('/sessions');
        res.render('users/show', { user });
    });
}


function toggle(req,res) {
    if(!req.user){
        res.redirect('/');
    }
    else {
        res.render('users/toggle');
    }
}

function update(req, res) {
    User.update(req.params.id, req.body);
    res.redirect('users');
}

module.exports = {
    index,
    show,
    toggle,
    update
};