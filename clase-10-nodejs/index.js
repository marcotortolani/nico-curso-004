const express = require('express');
const app = express()



app.use('/', express.static(__dirname + '/static'));



app.get('/texto', function(req, res){
  res.sendFile(__dirname + '/static/texto.txt');
})

app.get('/caballeros', function(req, res){
  res.sendFile(__dirname + '/static/caballeros.json');
})



app.listen(3000)