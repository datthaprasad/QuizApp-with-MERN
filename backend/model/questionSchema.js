const mongoose=require('mongoose');

const questionSchema=new mongoose.Schema({
    subject:{type:String},
    chapter:{type:String},
    questions:[[{type:String,length:6}]]
});

module.exports=mongoose.model('Question',questionSchema);