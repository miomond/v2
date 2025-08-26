const mongoose = require('mongoose')

const schema = mongoose.Schema;

const UserSchema = new schema({
    name:String,
    disc:String,
})

const User = mongoose.model("User", UserSchema)
module.exports= User