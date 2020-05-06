//jshint esversion:6

const express = require("express");

const app = express();

app.get("/", function(req,res){
 res.sendfile(__dirname + "/index.html");
});

app.get("/", function(req,res){
 res.sendfile(__dirname + "/css/style.css");
});


app.listen(3000, function(){
  console.log("Server started on port 3000");
});
