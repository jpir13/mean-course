// access to db
const mongoose = require('mongoose');

// access to Goals model
const goalModel = mongoose.model('goal');

const goalsList = function (_req, res) {
    goalModel.find({}, function (err, goals){
        if (err) {
            res.status(404).json(err);
        }
        else {
            res.status(200).json(goals);
        }
    });
};

const addGoal = function (req, res) {
    goalModel.create(req.body, function (err, newGoal){
        if (err) {
            res.status(400).json(err);
        }
        else {
            res.status(201).json(newGoal);
        }
    });
};

module.exports = {
    goalsList,
    addGoal
};
