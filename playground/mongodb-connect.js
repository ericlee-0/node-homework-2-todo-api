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
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // },(err, result)=>{
  //   if(err){
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // })

  //Insert new doc into User (name, age, location)

  // db.collection('Users').insertOne({
  //   // _id:132,
  //   name:'Bruce',
  //   age:21,
  //   location:'the Earth'
  // },(err,result)=>{
  //   if(err){
  //     return console.log('Unable to insert Users', err);
  //   }
  //   // console.log(JSON.stringify(result.ops, undefined, 2));
  //   console.log(result.ops[0]._id.getTimestamp());
  // })

  client.close();
});
