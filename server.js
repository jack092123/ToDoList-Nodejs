var express = require('express');
var app = express();

var api = require('./routes/api');
var db = require('./configs/database');

var port = process.env.PORT || 8888;

//set public virtual route and the folder path
app.use('/public', express.static(__dirname + '/public'));


app.all('/$', function(req, res, next){
    console.log(req);
    next();
});

//for all api connections using api.js to handle
app.use('/api', api);

//Responce the static HTML for frontend
app.get('/todo', function(req, res){
    res.sendFile(__dirname + '/views/hello_node.html');
});
app.get('/todo/list', function(req, res){
    res.sendFile(__dirname + '/views/todolist.html');
});
app.get('/todo/list/edit/:id', function(req, res){
    res.sendFile(__dirname + '/views/edit.html');
});

//start the server at port
app.listen(port);
console.log('Server open at port: ' + port);
