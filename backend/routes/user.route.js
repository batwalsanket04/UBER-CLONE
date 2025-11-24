const express=require('express');
const Router=express.Router();

const { LoginUser, createUser, getAllUser, getUserById, deleteUser, updateUser } = require('../controller/user.controller');

 


Router.post("/register",createUser)
Router.post("/login",LoginUser)
Router.get("/",getAllUser)
Router.get("/:id",getUserById)
Router.delete("/:id",deleteUser)
Router.put("/:id",updateUser)


module.exports=Router;