const mongoose=require('mongoose')
const Schema = mongoose.Schema

const accountsSchema = new Schema({
    account_holder:{
        type:String,
        required:true
    },
    number:{
        type:Number,
        required:true 
    },
    amount:{
        type:Number,
        required:true
    }
}, {})
module.exports =mongoose.model('Account',accountsSchema)

