const User=require('../model/userSchema')

const userSignup=async (req,res)=>{
    let existingUser;
    try{
        existingUser=await User.findOne({email:req.body.email})
    }
    catch(err){
        res.json("something went wrong"+err.message)
        return;
    }
    if(existingUser){
        res.json("Email already takened")
    }
    else{
        const user=new User({email:req.body.email,password:req.body.password});
            console.log("user is "+user);
            try{
                await user.save();
                res.json("successfull")
            }
            catch(err){
                res.json("cant save"+err.message);
            }
    }
    
}

const userLogin=async(req,res)=>{
    try{
        let existingUser=await User.findOne({email:req.body.email})
        if(!existingUser) res.json("user not found");
        else if(req.body.password===existingUser.password)
            res.json("login successfull")
        else
                res.json("password is incorrect")
    }
    catch(err){
        res.json("login unsuccesfull"+err.message)
    }
}

exports.userSignup=userSignup;
exports.userLogin=userLogin;