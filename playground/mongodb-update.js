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

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("5c3ba270596199be16a6db37")
  // },{
  //   $set: {
  //     completed:true
  //   }
  // },{
  //   returnOriginal:false
  // }).then((result)=>{
  //   console.log(result);
  // })

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5c3bac2a596199be16a6e0ff")
  },{
    $set:{
      name:'Alexander'
    }
   ,
    $inc:{
      age:1
    }
  },
   {
      returnOriginal:false
    }
  ).then((result)=>{
    console.log(result);
  })

  // client.close();
});
