const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// Todo.remove({}).then((doc)=>{
//   console.log(doc);
// })

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id:"5c3d407e77f7400929175ca7"}).then((todo)=>{
  
})

Todo.findByIdAndRemove("5c3d407e77f7400929175ca7").then((todo)=>{
  console.log(todo);
})
