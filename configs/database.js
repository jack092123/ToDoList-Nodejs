var mongoose = require('mongoose');

//Connext to MongoDB
const MONGO_URL = 'mongodb://127.0.0.1:27017/Todo';
try {
    mongoose.connect(MONGO_URL);
} catch(err) {
    console.log(err);
}

//Listen on open and error
mongoose.connection.once(
    'open', function(){
        console.log("MongoDB Running");
    }
).on(
    'error', function(e) {
        console.log(e);
    }
);
