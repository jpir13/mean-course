const request = require('request');
const apiURL = require('./apiURLs');

const showForm = function(req, res){
    res.render('goals_add');
}

const goallist = function(req, res){
    const path = '/api/goals';
    const requestOptions = {
        url: apiURL.server + path,
        method: 'GET',
        json: {},
        qs: {}
    };

    request(
        requestOptions,
        function (err, response, body){
            if(err){
                res.render('error', {message: err.message});
            } else if (response.statusCode !== 200){
                res.render('error', {message: 'Error while accessing API: ' + response.statusMessage + " ("+ response.statusCode + ")" });
            } else if (! (body instanceof Array)) {
                res.render('error', {message: 'Unexpected response data'});
            } else if (!body.length){
                res.render('error', {message: 'No documents in collection'});
            } else {
                res.render('goals', {goals: body});
            }
        }
    );
};

const addGoal = function(req, res){
    const path = '/api/goals';

    const postData = {
        desc: req.body.desc,
        embed: req.body.embed
    };

    const requestOptions = {
        url: apiURL.server + path,
        method: 'POST',
        json: postData
    };

    request(
        requestOptions,
        function (err, response){
            if (response.statusCode === 201) {
                res.redirect('/goals');
            } else {
                res.render('error', {message: 'Error adding data: ' +
            response.statusMessage +
            ' ('+ response.statusCode + ')'});
            }
        }
    );
};

module.exports = {
    goallist,
    showForm,
    addGoal
};