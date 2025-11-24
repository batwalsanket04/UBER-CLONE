
const UserModel=require('../models/userModel')
const bcrypt=require('bcrypt')
const JWT=require('jsonwebtoken')


const createUser=async(req,res)=>{
    try {

  const {fullname,email,password}=req.body;

   const passwordRegex =
     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

   if(!fullname || !email || !password)
   {
  return  res.status(500).json({message:"All field are required"})
   }

   if(!passwordRegex.test(password))
   {
   return  res.status(400).json({message:" Password must be 8+ chars, include uppercase, lowercase, number & special char"})
   }

   const userExist=await UserModel.findOne({email})
   if(userExist){
   return res.status(400).json({message:"User already exist"})
   }

    const hashedPassword=await bcrypt.hash(password,10)

    const newUser= await UserModel.create({fullname,email,password:hashedPassword})
    res.status(200).json({success:true,message:"User Created successfully",user:newUser})
    } catch (error) {
       console.log("Registration Error:",error)
       res.status(500).json({success:false,message:"Registration failed"})

    }
}

const LoginUser=async(req,res)=>{
    try {
        const{fullname,email,password}=req.body;
    
    const user=await UserModel.findOne({email}) 

    if(!user)
    {
      return  res.status(500).json({success:false,message:"User not found"})
    }

    const isMatch=await bcrypt.compare(password, user.password)

     if(!isMatch)
     {
       return res.status(400).json({success:false,message:"Invalid Credentials"})
     }

     const token=JWT.sign(
        {id:user._id,name:user.fullname,email:user.email},
        process.env.JWT_SECRET,
     );

     res.status(200).json({success:true,message:"Login Successfully",
        token,
        user:{
            _id:user._id,
            name:user.fullname,
            email:user.email
        }
     })
        
    } catch (error) {
        console.log("Login Error:",error);
        res.status(400).json({success:false,message:"Failed to connecting server"})
        
    }
}

const getAllUser=async(req,res)=>{
    try {
        const user=await UserModel.find()
        res.status(200).json(user)
    } catch (error) {
        console.log("Error:",error)
        res.status(500).json({message:"server error"})
    }
}

const getUserById=async(req,res)=>{
try {
    const user=await UserModel.findById(req.params.id)
   if(!user) return res.status(500).json({message:"user not found"})
    res.status(200).json(user)
} catch (error) {
    console.log("Error:",error)
    res.status(500).json({message:"server error"})
}
}

const deleteUser=async(req,res)=>{
    try {
        const user=await UserModel.findByIdAndDelete(req.params.id)
    if(!user) return res.status(500).json({success:false,message:"user not found"})
        res.status(200).json({success:true,message:"user deleted successfully"})
    } catch (error) {
        console.log("Error:",error)
        res.status(200).json({success:false,message:"Server Error"})    
    }
}

const updateUser=async(req,res)=>{
    const {fullname,email,password}=req.body;
    try {
        let updateData={fullname,email}

        if(password){
            updateData.password=await bcrypt.hash(password,10)
        }
    
        const updatedUser=await UserModel.findByIdAndUpdate(req.params.id,updateData,{new:true})
        if(!updatedUser)return res.status(500).json({message:"user Not Found"})   
            res.status(200).json({success:true,message:"user updated successfully",user:updatedUser})     
    } catch (error) {
        console.log("Error:",error)
        res.status(500).json({success:false,message:"server error"})
    }
}





module.exports={
    createUser,
    LoginUser,
    getAllUser,
    getUserById,
    deleteUser,
    updateUser
}
