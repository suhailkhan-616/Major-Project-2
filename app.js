const express = require('express');
const app = express();
const port = 3000;
const router = require('./routes/home');

// database connection
const db = require('./config/mongoos')

//Model
const List = require('./models/List');

// Express templet engine
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.urlencoded());

// assests
app.use(express.static('assets'));

// routes
app.use('/',router);

app.listen(port , function(err){
    if(err){
        console.log('Error',err);
    }
    console.log(`Successfull server is running on port:${port}`);
});
