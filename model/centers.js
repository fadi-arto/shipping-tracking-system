const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CenterShema = mongoose.Schema({

Location :{
    type : String ,
    required : true,
},
Name : {
type : String,
required : true
}

},{timestamps :true});

const centers = mongoose.model('centers',CenterShema);
module.exports =centers;




