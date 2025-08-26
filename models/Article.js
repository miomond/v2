const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const ArticleSchema = new Schema({
    Title :String ,
    bio:String ,
    Comment:String,
})


const Article  = mongoose.model ('Article',ArticleSchema);
module.exports = Article;