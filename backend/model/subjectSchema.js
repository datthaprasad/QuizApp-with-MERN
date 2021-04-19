const mongoose=require('mongoose');

const subjectSchema=new mongoose.Schema({
    name:{type:String},
    chapters:[{type:String }]
});

module.exports=mongoose.model('Subject',subjectSchema);