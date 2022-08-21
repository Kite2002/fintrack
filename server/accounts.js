const { json } = require('express')
const express=require('express')
const router = express.Router()
const Account=require('./models')
const mongoose=require('mongoose')

router.get('/:id', async(req,res)=>{
   
        const {id}=req.params
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error:'Account not found'}) 
        }

        const account=await Account.findById(id)
        if(!account){
            return res.status(404).json({error:'Account not found'})
        }
        res.json(account)
});

router.post('/',async (req,res)=>{
    const {account_holder,number,amount}=req.body

    const account = await Account.create({account_holder,number,amount})
    let emptyFields=[]

    if(!account_holder){
        emptyFields.push('account_holder')
    }

    if(!number){
        emptyFields.push('number')
    }

    if(!amount){
        emptyFields.push('amount')
    }
    if(emptyFields.length >0){
        return res.status(400).json({error:'Please fill in all the fields',emptyFields})
    }

    try {
        const account = await Account.create({title,load,reps})
        res.json(account)
    } catch (error) {
        
        res.status(404).json({error:'Something went wrong'})
    }
    
})

router.patch('/:id',(req,res)=>{
    res.json({mssg:'Update your account'})
});

router.delete('/:id',(req,res)=>{
    res.json({mssg:'Delete your account'})
});

module.exports =router