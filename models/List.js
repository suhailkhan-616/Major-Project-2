const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
    desc: {
        type:String,
        required: true
    },
    category:{
        type: String,
        required:true
    },
    date:{
        type:Date,
        required:true
    }
});

const List = mongoose.model('List',ListSchema);

module.exports = List;