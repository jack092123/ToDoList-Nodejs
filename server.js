var express = require('express');
var app = express();

var api = require('./routes/api');
var db = require('./configs/database');

var port = process.env.PORT || 8888;

app.use('/public', express.static(__dirname + '/public'));

app.all('/$', function(req, res, next){
    console.log("Called!!");
    next();
});

app.use('/api', api);

app.get('/todo', function(req, res){
    res.sendFile(__dirname + '/views/hello_node.html');
});
app.get('/todo/list', function(req, res){
    res.sendFile(__dirname + '/views/todolist.html');
});
app.get('/todo/list/edit/:id', function(req, res){
    res.sendFile(__dirname + '/views/edit.html');
});

app.listen(port);
console.log('Server open at port: ' + port);
