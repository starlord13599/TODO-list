var mongoose = require('mongoose');
mongoose.set('debug', true);

mongoose.connect('mongodb://localhost/todo_db', {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
mongoose.Promise = Promise;

module.exports.Todo = require('./todoSchema');