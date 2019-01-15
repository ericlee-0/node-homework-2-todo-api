var express = require('express');
//take json ojb and parse and convert to req obj
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose')

var {Todo} = require('./models/todo')

var {User} = require('./models/user')

const {ObjectID} = require('mongodb');


var app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json())

app.post('/todos',(req,res)=>{
   // console.log(req.body);
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
  });
});

app.get('/todos/:id',(req,res)=>{
  // res.send(req.params);
  var id = req.params.id;

  //Valid id using isValid
  //404 - send back empty sned
  if(!ObjectID.isValid(id)){
    // console.log('ID not valid');
    // res.send(404);
    return res.status(404).send();
  }
  //findById
    //success
      //if todo - send it back
      //if no todo - send back 404 with empty body
    //error
      //400 - and send empty body back
  Todo.findById(id).then((todo)=>{
    if(!todo){
      return res.status(404).send()
    }
    // res.send(todo)
    res.send({todo});
  }).catch((e)=>{
    res.status(400).send();
  })



})

app.listen(port, ()=>{
  console.log(`Started up at port ${port}`);
});


module.exports = {app}
