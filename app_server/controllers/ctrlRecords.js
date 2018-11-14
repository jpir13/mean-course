const request = require('request');
const apiURL = require('./apiURLs');

const showForm = function(req, res){
    res.render('records_add');
}

const scudettolist = function(req, res){
    const path = '/api/records';
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
                res.render('records', {records: body});
            }
        }
    );
};

const addScudetto = function(req, res){
    const path = '/api/records';

    const postData = {
        year: req.body.year
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
                res.redirect('/records');
            } else {
                res.render('error', {message: 'Error adding data: ' +
            response.statusMessage +
            ' ('+ response.statusCode + ')'});
            }
        }
    );
};

module.exports = {
    scudettolist,
    showForm,
    addScudetto
};