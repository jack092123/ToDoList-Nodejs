var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//Connext to MongoDB
const MONGO_URL = process.env.MONGODB_URL;
try {
    mongoose.connect(MONGO_URL);
} catch(err) {
    console.log(err);
}

//Listen on open and error
mongoose.connection.once(
    'open', function(){
        console.log("MongoDB Connecting");
    }
).on(
    'error', function(e) {
        console.log(e);
    }
);
