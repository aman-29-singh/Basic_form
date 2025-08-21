import mongoose from 'mongoose'

const userSchema= new mongoose.Schema({
    firstname:{
        type: String,
        required:true
    },
    lastname:{
        type: String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    email:{
        type: String,
        required: true
    }
})

export const User = mongoose.model("User",userSchema);