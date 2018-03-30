var express = require('express');
var router = express.Router();
var Todo = require('../models/todo_model');

//Welcome message
router.get('/', (req, res) => {
    res.json({message : "Hello Nodejs!"});
});

//REST for the todo
router.get('/todo', (req, res) => {
    //get all data
    Todo.find((err, result) => {
        if (err) logandsend(err, res)
        else res.json(result);
    });
});
router.get('/todo/:id', (req, res) => {
    //find data from ObjectId
    Todo.find({_id: req.params.id}, function(err, result) {
        if (err) logandsend(err, res)
        else res.json(result);
    });
});
router.post('/todo', (req, res) => {
    //handle the data
    var data = req.body;
    if (data.status == "") data.status = "unfinished";
    if (data.priority == "") data.priority = "low";
    data.due_date = new Date(data.due_date).getTime();
    data.last_modify = Date.now();
    data.create_time = Date.now();

    //create DB model from data and save it
    var todo = new Todo(data);
    todo.save((err, doc) => {
        if (err) logandsend(err, res)
        else res.json({message: "Success Add"});
    });
});
router.put('/todo/:id', (req, res) => {
    var data = req.body;
    if (data.status == "") data.status = "unfinished";
    if (data.priority == "") data.priority = "low";
    data.due_date = new Date(data.due_date).getTime();
    data.last_modify = Date.now();

    Todo.findByIdAndUpdate(req.params.id, data, {new: true}, (err, doc) => {
        if (err) logandsend(err, res)
        else res.json({message: "Success Update", id: req.params.id});
    });
});
router.delete('/todo/:id', (req, res) => {
    //find data from ObjectId and delete it
    Todo.findByIdAndRemove(req.params.id, (err, result) => {
        if (err) logandsend(err, res)
        else res.json({message: "Success Delete", id: req.params.id});
    });
});

//function for err
function logandsend(msg, res) {
    console.log(msg);
    res.send(msg);
}

module.exports = router;