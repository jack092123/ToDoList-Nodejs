var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.json({message : "Hello Nodejs!"});
});

router.get('/todo', function(req, res){
    
});

router.post('/todo', function(req, res){
    
});

router.put('/todo/:id', function(req, res){
   
});

router.delete('/todo/:id', function(req, res){
    
});

module.exports = router;