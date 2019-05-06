const express = require('express')
const app = express()
const port = 5000
const server = require('./server')

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
