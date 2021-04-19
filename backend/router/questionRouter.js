const Question=require('../model/questionSchema')

const questionList=async (req,res)=>{
    let list;
    try{
        list=await Question.find({subject:req.body.subject,chapter:req.body.chapter});
        console.log("nodejs list "+list);
        res.json(list);
    }
    catch(err){
        console.log("nodejs type A "+err);
        res.json("nodejs type "+err);
    }
}

exports.questionList=questionList;