// access to db
const mongoose = require('mongoose');

// access to Goals model
const goalModel = mongoose.model('goal');

const goalsList = function (req, res) {
    res
        .status(200)
        .json({desc:"desc1", embed:"code"});
};

const addGoal = function (req, res) {
    res.status(201).json({desc:"asd", embed:"code2"});
};

module.exports = {
    goalsList,
    addGoal
};
