const captain=require('../models/captainModel')
const JWT=require('jsonwebtoken')
const bcrypt=require('bcrypt')



const createCaptain=async(req,res)=>{
    const {fullname,email,password,vehicle}=req.body
try {
       const passwordRegex =
     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

     if(!fullname || !email || !password || !vehicle)
     {
        return res.status(500).json({message:"All field are required"})
     }

     if(!passwordRegex.test(password)){
        return res.status(500).json("Password must be at least 8 character and character,symbol,capital letters")
     }


     const isMatch=await captain.findOne({email});

     if(isMatch) return res.status(500).json({message:"Captain already exist"})

     const hashedPassword=await bcrypt.hash(password,10)

const newUser=await captain.create({fullname,email,vehicle,password:hashedPassword})
res.status(200).json({success:true,message:"Captain Created Successfully",user:newUser})
    
} catch (error) {
    console.log("Registration Error:",error);
    res.status(500).json({success:false,message:"Registration failed"})
}
}



const loginCaptain=async(req,res)=>{
    const {email,password}=req.body;
try {

    const user=await captain.findOne({email}) 

if(!user) return res.status(500).json("captain  not Found")

const isMatch=await bcrypt.compare(password,user.password)

if(!isMatch) return res.status(500).json({message:"Invalid credentials"})

const token=JWT.sign(
    {
        id:user._id,
        email:user.email,
    },
    process.env.JWT_SECRET
);

res.status(200).json({success:true,message:"captain  Login successfully",token,user:{_id:user._id,email:user.email,password:user.password }})
    
} catch (error) {
 console.log("Error:",error)
 res.status(500).json({message:"Failed to connecting server"})   
}
}
































module.exports={
    createCaptain,
    loginCaptain
}