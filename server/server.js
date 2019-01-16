require ('./config/config.js')

const _ = require('lodash');

const express = require('express');
//take json ojb and parse and convert to req obj
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose')

var {Todo} = require('./models/todo')

var {User} = require('./models/user')




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

app.delete('/todos/:id',(req,res)=>{
  //get id
  var id = req.params.id;
  //validate id-> not valid? return 404

  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }

  Todo.findByIdAndDelete(id).then((todo)=>{
    if(!todo){
      return res.status(404).send('No data')
    }
    res.send({todo});
  }).catch((e)=>{
    res.status(400).send();
  })

})


app.patch('/todos/:id', (req, res) =>{
  var id = req.params.id;
  var body = _.pick(req.body, ['text', 'completed']);

  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }
  // console.log(body.completed);
  // console.log(_.isBoolean(body.completed));
  if(_.isBoolean(body.completed) && body.completed){
  // if(body.completed){
    body.completedAt = new Date().getTime();
  }else{
    body.completed = false;
    body.completedAt = null;

  }
// console.log(body);
  Todo.findByIdAndUpdate(id,{$set:body}, {new: true}).then((todo)=>{
    if(!todo){
      return res.status(404).send();
    }

    res.send({todo});
  }).catch((e)=>{
    res.status(400).send();
  })
});



//POST /users

app.post('/users',(req,res)=>{
  // var user = new User({
  //   email: req.body.email,
  //   password: req.body.password
  // });

  var body = _.pick(req.body, ['email','password']);
  var user = new User(body);

  // User.findByToken
  // user.generateAuthToken

  user.save().then(()=>{
    // res.send(user);
    return user.generateAuthToken();
  }).then((token)=>{
    res.header('x-auth',token).send(user);
  }).catch((e)=>{
    res.status(400).send(e);
  })
});

app.listen(port, ()=>{
  console.log(`Started up at port ${port}`);
});


module.exports = {app}
