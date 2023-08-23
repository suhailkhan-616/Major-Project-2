const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/List_db');

const db = mongoose.connection;

db.on('error',console.error.bind(console,'Error is persent to connection to Database'));

db.once('open',function(){
    console.log('Sucessfully Connect to db');
});