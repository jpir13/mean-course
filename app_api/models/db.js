const mongoose = require('mongoose');
const dbURI = 'mongodb://jali:testaaja13@ds237373.mlab.com:37373/romandb';

mongoose.connect(dbURI, { useNewUrlParser: true });

// loggers
mongoose.connection.on('connected', function(){
     console.log('Mongoose connected');
});
mongoose.connection.on('error', function(err){
    console.log('Mongoose conn error', err);
});
mongoose.connection.on('disconnected', function(){
    console.log('Mongoose disconnected');
});

require('./appSchemas');
