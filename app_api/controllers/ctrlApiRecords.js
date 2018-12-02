// access to db
const mongoose = require('mongoose');

// access to Records model
const recordModel = mongoose.model('record');

const recordsList = function (_req, res) {
    recordModel.find({}, function (err, records) {
        if (err) {
            res.status(404).json(err);
        } else {
            res.status(200).json(records);
        }
    });
};

const addRecord = function (req, res) {
    recordModel.create(req.body, function (err, newRecord) {
        if (err) {
            res.status(400).json(err);
        } else {
            res.status(201).json(newRecord);
        }
    });
};

const deleteRecord = function (req, res) {
    recordModel.findOneAndDelete(req.params.id, function (err) {
        if (err) {
            res.status(400).json(err);
        } else {
            res.send('Delete success');
        }
    });
};

module.exports = {
    recordsList,
    addRecord,
    deleteRecord
};
