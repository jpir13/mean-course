// access to db
const mongoose = require('mongoose');

// access to Players model
const playerModel = mongoose.model('player');

const playersList = function (req, res) {
    playerModel.find({}, function (err, players) {
        if (err) {
            res.status(404).json(err);
        } else {
            res.status(200).json(players);
        }
    });
};

const addPlayer = function (req, res) {
    playerModel.create(req.body, function (err, newPlayer) {
        if (err) {
            res.status(400).json(err);
        } else {
            res.status(201).json(newPlayer);
        }
    });
};

module.exports = {
    playersList,
    addPlayer
};
