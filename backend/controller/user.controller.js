
const UserModel=require('../models/userModel')
const bcrypt=require('bcrypt')
const JWT=require('jsonwebtoken')


const createUser = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    if (!fullName?.firstname || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        message: "Password must be strong"
      });
    }

    const userExist = await UserModel.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await UserModel.create({
      fullName,
      email,
      password: hashedPassword
    });

    res.status(201).json({
      success: true,
      message: "User Created Successfully",
      user: newUser
    });

  } catch (error) {
    console.log("Registration Error:", error);
    res.status(500).json({ message: "Registration failed" });
  }
};


const LoginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({
      email: email.toLowerCase()
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const token = JWT.sign(
      { id: user._id, 
        email: user.email ,
        role:"user"
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(200).json({
      success: true,
      message: "Login Successful",
      token,
      user: {
        _id: user._id,
        fullName: user.fullName,
        email: user.email
      }
    });

  } catch (error) {
    console.log("Login Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};



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
