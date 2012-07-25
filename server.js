var express = require('express');
var server = express.createServer();
server.get('/', function(req, res){
   console.log('My first project from c9 to heroku') ;
   res.send('Wonderful c9 and heroku');
});
var port = process.env.PORT;
server.listen(port || process.env.PORT, function(){
    console.log("Listening on Port"+port);
});