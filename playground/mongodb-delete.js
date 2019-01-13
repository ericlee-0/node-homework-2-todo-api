// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj)

//es6 destructor
// var user = {name:'alex', age:20};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client)=>{
  if(err) {
    //program stop by using return
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  //deleteMany
  // db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result)=>{
  //   console.log(result);
  // })
  //deleteOne
  // db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result)=>{
  //   console.log(result);
  // })
  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
  //   console.log(result);
  // })


  // db.collection('Users').deleteMany({name:'Bruce'}).then((result)=>{
  //   console.log(result);
  // })

  db.collection('Users').findOneAndDelete({_id:new ObjectID("5c3b8b5d4d184202ed7d8101")}).then((result)=>{
    console.log(result);
  })

  // client.close();
});
