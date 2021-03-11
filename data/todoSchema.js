var mongoose = require('mongoose');

var ToDoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Cannot be empty'
    },
    completed: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    }
});


var Todo = mongoose.model('Todo', ToDoSchema);
module.exports = Todo;