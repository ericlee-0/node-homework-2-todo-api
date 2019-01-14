var {mongoose} = require('./db/mongoose')

var {Todo} = require('./db/todo')

var {User} = require('./db/user')


// var newTodo = new Todo({
//   text: 'Cook dinner'
// });

//
// newTodo.save().then((doc)=>{
//   console.log('Saved todo', doc);
// },(e)=>{
//   console.log('Unable to save todo')
// })


var newTodo = new Todo({
  // text: ' Eat dinner',
  // completed: true,
  // completedAt: 123
  text:'   Something todo   '
  // text:true -> text:"true"
});

newTodo.save().then((doc)=>{
  console.log(JSON.stringify(doc, undefined, 2));
},(e)=>{
  console.log(e);
})


//User
//email - require it  - trim it - set min length of 1

var newUser = new User({
  email: '   user@email'
});

newUser.save().then((doc)=>{
  console.log(JSON.stringify(doc, undefined, 2));
},(e)=>{
  console.log(e)
})
