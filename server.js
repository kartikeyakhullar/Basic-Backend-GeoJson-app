const express = require('express')
const router = require('./routes/api')
const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser') 

mongoose.connect('mongodb://localhost/ninjago')
mongoose.Promise = global.Promise;

app.use(bodyParser.json())

app.use('/api', router)

app.use((err,req,res,next)=>{
    res.status(422).send({
        error : err.message
    })
})

app.listen(3000, ()=>{
    console.log('Listening to the app...')
})