const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/vaishnav_db'

const app= express()

mongoose.connect(url, {useNewUrlParser:true})

const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const alienRouter = require('./routes/aliens')
app.use('/aliens', alienRouter)

app.listen(9000, () => {
    console.log('server started')
})


