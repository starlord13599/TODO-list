var express = require('express');
var app = express();
var router = express.Router();
var helpers = require('../helpers/todofuncs');


var db = require('../data');

router.route('/').get(helpers.GetTodos).post(helpers.PutTodos);
router.route('/:todoid').get(helpers.Todobyid).put(helpers.UpdateTodos).delete(helpers.DeleteTodo);

module.exports = router;