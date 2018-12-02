const express = require('express');
const router = express.Router();

const ctrlApiPlayers = require('../controllers/ctrlApiPlayers');
const ctrlApiGoals = require('../controllers/ctrlApiGoals');
const ctrlApiRecords = require('../controllers/ctrlApiRecords');

router
    .route('/players')
    .get(ctrlApiPlayers.playersList)
    .post(ctrlApiPlayers.addPlayer);

router
    .route('/goals')
    .get(ctrlApiGoals.goalsList)
    .post(ctrlApiGoals.addGoal);

router
    .route('/records')
    .get(ctrlApiRecords.recordsList)
    .post(ctrlApiRecords.addRecord);

router
    .route('/records/:id/delete')
    .delete(ctrlApiRecords.deleteRecord);

module.exports = router;