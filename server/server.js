const env = require('dotenv').config()
const mongoose = require('mongoose')
const express= require('express')
const app=express()
const accounts =require('./accounts')
const { User: UserApi } = require('./apis')
const cors = require('cors')

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000'
}))

app.use('/api/accounts',accounts)
app.use('/api/user', UserApi);

mongoose.connect(process.env.URI).then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log('connected')
    })

})


 
