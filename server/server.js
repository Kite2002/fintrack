const env = require('dotenv').config()
const mongoose = require('mongoose')
const express= require('express')
const app=express()
const accounts =require('./accounts')

app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.method)
    next()
});

app.use('/api/accounts',accounts)

mongoose.connect(process.env.URI).then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log('connected')
    })

})


 
