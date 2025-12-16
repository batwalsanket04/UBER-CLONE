const captain=require('../models/captainModel')
const JWT=require('jsonwebtoken')
const bcrypt=require('bcrypt')



const createCaptain = async (req, res) => {
  try {
    let { fullname, email, password, vehicle } = req.body;

    email = email.toLowerCase();

    if (!fullname || !email || !password || !vehicle) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        message:
          "Password must contain uppercase, lowercase, number & special character"
      });
    }

    const existingCaptain = await captain.findOne({ email });
    if (existingCaptain) {
      return res.status(400).json({ message: "Captain already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await captain.create({
      fullname,
      email,
      password: hashedPassword,
      vehicle
    });

    res.status(201).json({
      success: true,
      message: "Captain Created Successfully",
      user: newUser
    });

  } catch (error) {
    console.log("Registration Error:", error);
    res.status(500).json({ message: "Registration failed" });
  }
};



const loginCaptain = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and Password are required"
      });
    }

    const user = await captain
      .findOne({ email: email.toLowerCase() })
      .select("+password");
     

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Captain not found"
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials"
      });
    }
 
    const token = JWT.sign(
      { id: user._id, 
        email: user.email,
        role:"captain"
       },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );


    res.status(200).json({
      success: true,    
      message: "Captain Login successfully",
      token,
      user: {
        _id: user._id,
        email: user.email
      }
    });

  } catch (error) {
    console.log("Login Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};


































module.exports={
    createCaptain,
    loginCaptain
}