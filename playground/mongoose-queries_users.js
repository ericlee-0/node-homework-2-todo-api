const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {User} = require('./../server/models/user');

var id = "5c3c4785817553024e9344a0"


if(!ObjectID.isValid(id)){
  console.log('ID not valid');
}


Todo.find({
  _id: id
}).then((todos)=>{
  console.log('Todos', todos);
});

Todo.findOne({
  _id: id
}).then((todo)=>{
  console.log('Todo',todo);
});

User.findById(id).then((user)=>{
  if(!user){
    return console.log('Id not found.');
  }
  console.log('User',user);
}).catch((e)=>{
  console.log(e);
})
