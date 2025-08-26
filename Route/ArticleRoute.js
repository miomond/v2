const express = require('express');
const ArticleRoute = express.Router();
const Article = require('../models/Article'); 




ArticleRoute.post("/makeArticle", async(req,res)=>{
    console.log("Article triggerd " );
    let reqbody = req.body
    console.log(reqbody);
    const newArticle = new Article();
    newArticle.Title= req.body.poster.Title
    newArticle.bio= req.body.poster.bio
    newArticle.Comment= req.body.poster.Comment
    await newArticle.save();
    res.send({ massage:req.body })
})



ArticleRoute.get("/Articles", async(req,res)=>{
    console.log(" get Article triggerd " );
    const allArticles = await Article.find();
    console.log(allArticles);
    res.json(allArticles );
})


ArticleRoute.get("/Articles/:id", async(req,res)=>{
    console.log(" get one Article triggerd " );
    let id = req.params.id
    const OneArticles = await Article.findById(id);
    console.log(OneArticles);
    res.json(OneArticles );
})


ArticleRoute.delete("/DeleteArticle/:id", async(req,res)=>{
    console.log(" delete one Article triggerd " );
    let id = req.params.id
                        await Article.deleteOne({"_id":id});
    const allArticles = await Article.find();
    console.log(id);
    res.json(allArticles );
})



    ArticleRoute.get("/",(req,res)=>{
    console.log("Article triggerd ");
    res.send('Article Activated ')
})

module.exports=ArticleRoute;