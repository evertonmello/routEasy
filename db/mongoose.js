var mongoose = require('mongoose');
var config = require('../config/config.json');

mongoose.connect('mongodb://localhost/' + config.db);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('conectado no banco ' + config.db);
});

module.exports = mongoose;