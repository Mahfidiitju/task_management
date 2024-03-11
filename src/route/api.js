const express=require('express');
const userController=require('../controller/userController')
const AuthMiddleware=require('../middleware/AuthMiddleware');
const router=express.Router();




router.post("/registration",userController.registration);
router.post("/login",userController.login);

// router.get("/verifyEmail/:email",userController.verifyEmail);
// router.get("/verifyOTP/:email/:otp",userController.verifyOTP);
// router.get("/passwordReset/:email/:otp/:password",userController.passwordReset)


// // After Login
router.get("/profileDetails",AuthMiddleware,userController.profileDetails);
// router.post("/profileUpdate",AuthMiddleware,userController.profileUpdate);



// // Task Create, Task Update, Task Delete, Task Read
// router.post("/task/create",AuthMiddleware,TaskController.create);
// router.post("/task/update/:id",AuthMiddleware,TaskController.update);
// router.get("/task/read",AuthMiddleware,TaskController.read);
// router.get("/task/delete/:id",AuthMiddleware,TaskController.delete);


module.exports=router;