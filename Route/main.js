const express = require("express");
const mainRouter = express.Router();

mainRouter.post("/testPost",(req,res)=>{
    console.log("test post created successfully");
    res.send("test post created successfully");
})


mainRouter.post("/testparams/:num1/:num2",(req,res)=>{
    let num1 = req.params.num1;
    let num2 = req.params.num2;
    let sum = Number(num1)+Number(num2)
    console.log("test params created successfully with sum ");
    res.send("test params created successfully" + " and the function is sum " + sum);
})

mainRouter.post("/testbody",(req,res)=>{
    let num10 = req.body.num10
    let num20 = req.body.num20  
      let multiplcation = Number(num10)* Number(num20)
    console.log("test body created successfully with multiblication");
    res.send("test body created successfully " + multiplcation );
})

mainRouter.post("/testheader",(req,res)=>{
    let num200= req.headers.num200;
    let num600= req.headers.num600;
    let dividend = num600/num200
    console.log("test header created successfully whith divedend ");
    res.send("test header created successfully " + dividend);
})

mainRouter.post("/testquery",(req,res)=>{
   let num50= req.query.num50
   let num60 = req.query.num60
    console.log("test query created successfully" + num50+num60);
    res.send("test query created successfully"+num50+num60);
})

mainRouter.post("/testauth",(req,res)=>{
    console.log("test auth created successfully");
    res.send("test auth created successfully");
})

mainRouter.post("/testallPost/:n1/:n2",(req,res)=>{
 let n1 = req.params.n1
 let n2 = req.params.n2
 let name = req.body.name
 let disc = req.body.disc
 let category = req.headers.category
 let filter = req.headers.filter
 let mathType = req.query.mathType
    console.log(`test auth created successfully`);
    console.log(`param is : ${n1} , ${n2}`);
    console.log(`body have ${name} , ${disc} `);
    console.log(`header have ${category} , ${filter} `);
    console.log(`query params have ${mathType}  `);
    res.send("test auth created successfully go see the clg & knock your self out ");
})

mainRouter.get("/",(req,res)=>{
    console.log("main triggerd ");
    res.send('main Activated ')
})

module.exports= mainRouter;