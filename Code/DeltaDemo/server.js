var path = require('path');
var express = require('express');
var app = express();

//Make Files directory static
app.use(express.static(path.join(__dirname, 'Files')));

//Default path should send index.html
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'Files/index.html'));
});

//Start listening
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});