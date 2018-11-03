// access to db
const mongoose = require('mongoose');

// access to Records model
const recordModel = mongoose.model('record');

const recordsList = function (req, res) {
    res
        .status(200)
        .json({year:"1990-91"});
};

const addRecord = function (req, res) {
    res.status(201).json({year:"1965-64"});
};

module.exports = {
    recordsList,
    addRecord
};
