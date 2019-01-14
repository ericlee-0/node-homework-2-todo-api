var express = require('express');
//take json ojb and parse and convert to req obj
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose')

var {Todo} = require('./models/todo')

var {User} = require('./models/user')

var app = express();

app.use(bodyParser.json())

app.post('/todos',(req,res)=>{
   console.log(req.body);
  var todo = new Todo({
    text: req.body.text,
  });
  // var todo = new Todo(req.body);

  todo.save().then((doc)=>{
    res.send(doc);
  },(e)=>{
    res.status(400).send(e);
  })
})


app.get('/todos',(req,res)=>{
  Todo.find().then((todos)=>{
    res.send({
      todos
    })
  },(e)=>{
    res.status(400).send(e);
  })
})



app.listen(3000, ()=>{
  console.log('Starting on port 3000')
});


module.exports = {app}
