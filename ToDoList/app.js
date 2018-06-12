var express=require("express");
var app=express();
app.use(express.static(__dirname+"/public"))

// express listens to request and starts server
app.listen(3000,function() {
 console.log("server started on port 3000");
 }
)
