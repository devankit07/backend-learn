const express = require('express')

 
const app = express() // server instance
const cat = require("cat-me")

app.listen(3000)// server start
console.log('server suru')
console.log(cat())
