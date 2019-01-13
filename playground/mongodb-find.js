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

  // db.collection('Todos').find({completed:true}).toArray().then((docs)=>{
  // db.collection('Todos').find({
  //   _id: new ObjectID('5c3b8747979cf902dd2d45c0') //find by _id
  // }).toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // },(err)=>{
  //   console.log('Unable to fetch todos', err);
  // });



  db.collection('Todos').find().count().then((count)=>{
    console.log(`Todos count: ${count}`);

  },(err)=>{
    console.log('Unable to fetch todos', err);
  });


  db.collection('Users').find({name:'Bruce'}).toArray().then((docs)=>{
    console.log(JSON.stringify(docs, undefined, 2));
  });
  
  db.collection('Users').find({name:'Bruce'}).count().then((count)=>{
    console.log(`Users Bruce count: ${count}`);

  },(err)=>{
    console.log('Unable to fetch users', err);
  });
  // client.close();
});
