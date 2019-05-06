const express = require('express');
const server = express();

server.use(express.json());
const games = [];

server.get('/games',(req, res)=>{
  res.status(200).json(games);
})

server.post('/games',(req,res)=>{
  const {title,genre,year} = req.body;
  !title || !genre || !year ? res.status(422).json({error:'all fields must have value'}):res.status(201).json(req.body)
})

module.exports = server;