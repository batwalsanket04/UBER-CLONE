const express=require('express');
const { createCaptain, loginCaptain } = require('../controller/captain.controller');

const Router=express.Router();

Router.post("/register",createCaptain)
Router.post("/login",loginCaptain)

module.exports=Router;


