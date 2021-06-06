
var express = require('express')//
var app = express()
const bodyparser= require("body-parser")
const path = require("path")
const  bodyParserMiddleWare= bodyparser.urlencoded({extended: true})

app.use(express.static(path.join(__dirname + '/')));
app.get('/node.css', function(req, res, next) {
    res.sendFile(__dirname + "/" + "node.css");
  });

app.get('/', (req, res, next)=>{
    res.sendFile(path.join(__dirname, "page1.html"))
  })

app.get('/', (req, res, next)=>{
    res.sendFile(path.join(__dirname, "node.html"))
  })

  app.post("/info", bodyParserMiddleWare, (req, res, next)=>{
      console.log(req.body)
      res.sendFile(path.join(__dirname, "message.text"))   
  })
app.listen(3000,()=>{ 
    console.log("Server listening on port: 3000");
});
