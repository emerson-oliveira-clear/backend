
const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')
const queryParser = require('express-query-int')

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)
server.use(queryParser())


server.listen(port,function(){
    console.log(`backend is running on port ${port}`)
})

module.exports = server

/*
const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const routes = require('./../routes/routes')

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use('/api/billingcycles',routes)

server.listen(port, ()=>{
    console.log('backend is running')
})

module.exports = server
*/