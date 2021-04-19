const mongoose=require('mongoose');

const answerSchema=new mongoose.Schema({
    subject:{type:String},
    chapter:{type:String},
    question:{type:String},
    answer:{type:String},
    correctAnswer:{type:String},
    date:{type:Date}
});

module.exports=mongoose.model('Answer',answerSchema);