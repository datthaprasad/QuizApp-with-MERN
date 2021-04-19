const { request } = require('express');
const Answer=require('../model/answerSchema')

const answerList=async (req,res)=>{
        const user=new Answer({subject:req.body.subject,chapter:req.body.chapter,question:req.body.question,answer:req.body.answer,correctAnswer:req.body.correctAnswer,date:Date()});
            console.log("answer is "+user);
            try{
                await user.save();
                res.json("successfull")
            }
            catch(err){
                res.json("cant save"+err.message);
            }
    
}

exports.answerList=answerList;