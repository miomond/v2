const express = require("express");
const mainRouter= require('./Route/main');
const ArticleRouter = require('./Route/ArticleRoute')
const mongoose = require('mongoose')
const Article = require('./models/Article');
const User = require('./models/User');



const dbConniction = `mongodb+srv://memomond:00875421@cluster0.7xl0zgc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
mongoose.connect(dbConniction)
.then( ()=> {
    console.log("connected to cluster 0 successfully")
}).catch((err)=>{
    console.log(err);
})
const app = express();
app.use(express.json());


const port = 5000 ; 


app.get("/testRoute", (req,res)=>{
    console.log("main page visited");
    res.send("main page");
})

app.post("/testPost",(req,res)=>{
    console.log("test post created successfully");
    res.send("test post created successfully");
})
app.use("/main",mainRouter);
app.use("/Article",ArticleRouter);














app.get("/",(req,res)=>{
    console.log("wrong route visited ");
    res.send("admit your defeat ")

})

app.listen(port, () => {
    console.log(`the api is lestening on port ${port}`);
});

