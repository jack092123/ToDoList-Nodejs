var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todoSchema = new Schema({
    task: String,
    status: String,
    priority: String,
    due_date: Date,
    last_modify: Date,
    create_time: Date
});

var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;