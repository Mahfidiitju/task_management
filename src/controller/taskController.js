const Task = require("../model/task");


async function createTask(req,res){
    try{
       
        await Task.create({...reqBody,email:req.email});
        res.json({status:"success",message:" Task Created "})

    }catch (err) {
        res.json({status:"fail",message:err})
    }
}


async function updateTask(req,res){
    try{
        let email=req.email;
        let {id}=req.params;
        await Task.updateOne({_id:id,email:email},req.body);
        res.json({status:"success",message:" task Update Completed"})
    }catch (err) {
        res.json({status:"fail",message:err})
    }
}

async function readTask(req,res){
    try{
       
        let data=await Task.find({email:req.email});
        res.json({status:"success",data:data})
    }catch (err) {
        res.json({status:"fail",message:err})
    }
}




async function deleteTask(req,res){
    try{
        let email=req.email;
        let {id}=req.params;
        await Task.deleteOne({_id:id,email:email});
        res.json({status:"success",message:"Delete Completed"})
    }catch (err) {
        res.json({status:"fail",message:err})
    }
}

module.exports={deleteTask,readTask,createTask,updateTask}