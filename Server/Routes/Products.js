const express = require("express");
const router = express.Router();
const Products = require("../Schema/ProductSchema");

router.get('/',async(req,res)=>{
    const response = await Products.find();
    res.send(response);
})

//http://localhost:3000/

router.post('/',async (req,res)=>{
    const {username,origin,title,description,minimum,location,sellerMail,endDate,seller,finalBid,period,material,damage,additional,proof,img_url,status} = req.body;
    // res.send({
    //     UserName:username,
    //     title:title
    // })
    console.log(req.body);
    try{
        const response = await Products.create({...req.body,Schedule:"",status:-1});
        console.log(response);
        res.status(201).send({
            success:true,
            data:req.body
        })
    }
    catch(err){
        console.log(err);
        res.send({       
            success:false,
            data:req.body,
            err:err
        })
    }
    
})

router.get('/:id',async(req,res)=>{
    try{
        const response = await Products.findById(req.params.id);
        console.log(response);
    }
    catch(err){
        console.log("not found");
    }
})

router.put('/Accept/:id',async(req,res)=>{
    try{
        const updatedDocument = await Products.findOneAndUpdate(
            { _id: req.params.id }, // Filter condition
            { $set:{status:1} }, // Update data
            { new: true } // Return the updated document
          );
        if(!updatedDocument){
            return res.status(401).send("Invalid product id")
        }
        return res.status(202).send(updatedDocument);
    }
    catch(err){
        console.log(err);
    }
})

router.put('/Decline/:id',async(req,res)=>{
    try{
        const updatedDocument = await Products.findOneAndUpdate(
            { _id: req.params.id }, // Filter condition
            { $set:{status:0} }, // Update data
            { new: true } // Return the updated document
          );
        if(!updatedDocument){
            return res.status(401).send("Invalid product id")
        }
        return res.status(202).send(updatedDocument);
    }
    catch(err){
        console.log(err);
    }
})

router.patch('/BidUpdate/:id',async(req,res)=>{
    try{
        const updatedDocument = await Products.findOneAndUpdate(
            { _id: req.params.id }, // Filter condition
            { $set:req.body }, // Update data
            { new: true } // Return the updated document
          );
        if(!updatedDocument){
            return res.status(401).send("Invalid product id")
        }
        return res.status(202).send(updatedDocument);
    }
    catch(err){
        console.log(err);
    }
})

module.exports = router;