// require the library
const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://0.0.0.0:27017/');

// acquire the connection if it is sucessfull
const db = mongoose.connection;

// error
db.on('error', console.error.bind(console,'error connecting db!'));

// up and running then print the message
db.once('open', function(){
    console.log('Sucessfully connected to db');
});