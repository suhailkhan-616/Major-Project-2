const express = require('express');
const app = express();
const port = 3000;

// routes
app.use('/', require('./routes'));


app.listen(port , function(err){
    if(err){
        console.log('Error',err);
    }
    console.log(`Successfull server is running on port:${port}`);
})