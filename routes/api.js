var express = require('express');
var router = express.Router();
var Todo = require('../models/todo_model');

router.get('/', function(req, res){
    res.json({message : "Hello Nodejs!"});
});

router.get('/todo', function(req, res){
    
});

router.post('/todo', function(req, res){
    var todo = new Todo({
        task: "test",
        status: "ee",
        priority: "low",
        due_date: Date.now(),
        last_modify: Date.now(),
        create_time: Date.now()
    });

    todo.save(function(err, doc){
        if (err) {
            console.log(err);
        } else {
            console.log(doc);
            res.json({message: "Success"});
        };
    });
});

router.put('/todo/:id', function(req, res){
   
});

router.delete('/todo/:id', function(req, res){
    
});

module.exports = router;