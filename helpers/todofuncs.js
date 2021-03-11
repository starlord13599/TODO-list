var db = require('../data');

exports.GetTodos = function (req, res) {
    db.Todo.find().then(function (data) {
        res.json(data);
    }).catch(function (err) {
        console.log(err);
    });
};

exports.PutTodos = function (req, res) {

    console.log(req.body);
    db.Todo.create(req.body).then(function (data) {
        res.json(data);
    }).catch(function (err) {
        console.log(err);
    });
};
exports.Todobyid = function (req, res) {
    db.Todo.findOne({
        _id: req.params.todoid
    }).then(function (data) {
        res.send(data);
    }).catch(function (err) {
        res.send(err);
    });
};

exports.UpdateTodos = function (req, res) {
    db.Todo.findOneAndUpdate({
            _id: req.params.todoid
        }, req.body, {
            new: true
        })
        .then(function (data) {
            res.send(data);
        }).catch(function (err) {
            console.log(err);
        });
};
exports.DeleteTodo = function (req, res) {
    db.Todo.deleteOne({
        _id: req.params.todoid
    }).then(function (data) {
        res.send({
            message: 'Deleted One'
        });
    }).catch(function (err) {
        console.log(err);
    });
};
module.exports = exports;