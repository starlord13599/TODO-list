var express = require('express');
var app = express();
var todos = require('./routes/todo');
var BodyParser = require('body-parser');

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"));








app.get('/', function (req, res) {
    res.sendFile(__dirname + "/views/index.htm");
});

app.use('/api/todos', todos);


app.listen('3000', function () {
    console.log('Server has started');
});