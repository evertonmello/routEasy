var mongoose = require('mongoose');
var config = require('../config/config.json');
var db = mongoose.connection;

mongoose.connect('mongodb://localhost/' + config.db, { useMongoClient: true });

db.on('error', console.error.bind(console, 'connection error:'));
db.once('openUri', function () {
  console.log('conectado no banco ' + config.db);
});


module.exports = mongoose;