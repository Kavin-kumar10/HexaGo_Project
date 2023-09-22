const express = require('express');
const router = express.Router();
const Auth = require('../Schema/AuthSchema');


router.get('/', async(req,res)=>{
    const Response = await Auth.find();
    res.send(Response);
})

router.post('/SignUp',async (req,res)=>{
    const {Username,email} = req.body;
    const Users = await Auth.findOne({Username,email});
    const AllUsers = await Auth.find();
    if(!Users){
        const response = await Auth.create(req.body);
        console.log(response);
       res.status(201).send({
        success:true,
        data:response
       })
    }
    else{
        res.status(401).send({
            success:false,
            data:"User Already found"
        });
    }
})

router.post('/SignIn',async(req,res)=>{
    const {email,password} = req.body;
    const Users = await Auth.findOne({email,password});
    if(Users){
        res.status(200).send({
            success:true,
            data:Users
        })
    }
    else{
        res.status(401).send({
            success:false,
            data:"Account not found"
        })
    }
})

module.exports = router;