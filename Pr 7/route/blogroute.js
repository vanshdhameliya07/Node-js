const express=require('express');


const route=express.Router();

const { addblog }=require('../controller/Blogcontroller')

route.get('/addblog',addblog);


module.exports=route