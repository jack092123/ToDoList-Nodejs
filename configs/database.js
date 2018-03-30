var mongoose = require('mongoose');

const MONGO_URL = 'mongodb://127.0.0.1:27017/Todo';

try {
    mongoose.connect(MONGO_URL);
} catch(err) {
    console.log(err);
}

mongoose.connection.once(
    'open', function(){
        console.log("MongoDB Running");
    }
).on(
    'error', function(e) {
        console.log(e);
    }
);
