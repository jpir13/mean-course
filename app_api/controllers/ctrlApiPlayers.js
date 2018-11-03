// access to db
const mongoose = require('mongoose');

// access to Players model
const playerModel = mongoose.model('player');

const playersList = function (req, res) {
    res
        .status(200)
        .json({name:"player1", appearances:"10", goals:"13"});
};

const addPlayer = function (req, res) {
    res.status(201).json({name:"pekka", apperances:"15", goals:"15"});
};

module.exports = {
    playersList,
    addPlayer
};
