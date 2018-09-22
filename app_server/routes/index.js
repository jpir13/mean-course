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

module.exports = router;