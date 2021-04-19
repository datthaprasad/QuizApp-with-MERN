const Subject=require('../model/subjectSchema')

const subjectList=async (req,res)=>{
    let list;
    try{
        list=await Subject.find({name:req.body.name});
        // console.log("nodejs list "+list);
        res.json(list[0].chapters);
    }
    catch(err){
        console.log("nodejs type A "+err);
        res.json("nodejs type "+err);
    }
}

exports.subjectList=subjectList;