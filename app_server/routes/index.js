const express = require('express');
const router = express.Router();

const ctrlMain = require('../controllers/ctrlMain');
const ctrlLeagueRecords = require('../controllers/ctrlRecords');
const ctrlMostAppearences = require('../controllers/ctrlPlayers');
const ctrlGoals = require ('../controllers/ctrlGoals');

// home
router.get('/', ctrlMain.index);
// routes to corresponding controllers
router.get('/records', ctrlLeagueRecords.scudettolist);
router.get('/players', ctrlMostAppearences.playerlist);
router.get('/goals/', ctrlGoals.goallist);

// add scudetto
router
    .route('/records/add')
    .get(ctrlLeagueRecords.showForm)
    .post(ctrlLeagueRecords.addScudetto);

// del scudetto
router
    .route('/records/:id')
    .delete(ctrlLeagueRecords.delScudetto);

// add players
router
    .route('/players/add')
    .get(ctrlMostAppearences.showForm)
    .post(ctrlMostAppearences.addPlayer);

// add goals
router
    .route('/goals/add')
    .get(ctrlGoals.showForm)
    .post(ctrlGoals.addGoal);

module.exports = router;