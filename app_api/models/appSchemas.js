const mongoose = require('mongoose');

// schemas defining document structure
const playerSchema = new mongoose.Schema({name:String, appearances:String, goals:String});
const goalSchema = new mongoose.Schema({desc:String, embed:String});
const recordSchema = new mongoose.Schema({year:String});

// models containing compiled instances of the schemas
mongoose.model('player', playerSchema, "Players by most appearances");
mongoose.model('goal', goalSchema, "Beautiful goals");
mongoose.model('record', recordSchema, "Serie A records");