const User=require('../model/user')
const jwt=require('jsonwebtoken');

exports.registration=async(req,res)=>{
    try{
        await User.create(req.body);
        res.json({status:"successfully",message:"registration completed"})
    }
    catch(error)
    {
        res.json({status:"fail",message:error})
    }
}

exports.login=async (req,res)=>{
    try{
        const user=await User.find(req.body);
        if(user.length>0)
        {
            let PayLoad={exp:Math.floor(Date.now()/1000)+(86500),data:req.body['email']};
            let token= jwt.sign(PayLoad,"123-abc");
            res.json({status:"user found",token:token})
        }
        else res.json({status:"login fail"})
    }
    catch(error){
        res.json({status:"fail",message:error})
    }

}

exports.profileUpdate=(req,res)=>{

}

exports.profileDetails=async(req,res)=>{

    try{
        const user=await User.find();
        res.send(user);
    }
    catch(err)
    {
        res.send({status:"no user found"})
    }
   
    

}
exports.verifyEmail=(req,res)=>{

}

exports.verifyOTP=(req,res)=>{

}

exports.passwordReset=(req,res)=>{

}