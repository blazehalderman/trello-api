const express = require('express'),
      mongoose = require('mongoose'),
      logger = require('morgan'),
      cors = require('cors'),
      bodyParser = require('body-parser');

const app = express();

//Database
mongoose.connect('mongodb://localhost/trello')

mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', function(err) {
  console.log(err);
});
db.once('open', function() {
  console.log('Connected to trello database!');
});

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());

app.use('/users', require('./routes/users.js'));
app.use('/boards', require('./routes/boards.js'));
app.use('/lists', require('./routes/lists.js'));
app.use('/cards', require('./routes/cards.js'));
app.use('/comments', require('./routes/comments.js'));

app.listen(3000, function() {
  console.log('trello is running');
});

module.exports = app;
