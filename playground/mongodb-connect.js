//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // destructuring

// var obj = new ObjectID();
// console.log(obj);

// var user = {name: 'neeraja', age: 25};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
if (err) {
  return console.log('Unable to connect to Mongo DB server');
}
console.log('Connected to MongoDB server');

// const db = client.db('TodoApp')
// db.collection('Todos').insertOne({
//   text: 'something to do',
//   completed: false
// }, (err, result) => {
//   if (err) {
//     return console.log('Unable to insert todo', err);
//   }
//   console.log(JSON.stringify(result.ops, undefined, 2));
// })

const db = client.db('TodoApp');
db.collection('Todos').find({completed: true}).toArray().then((docs) => {
  console.log(JSON.stringify(docs, undefined, 2));
}, (err) => {
  console.log('Unable to fetch');
})

//client.close();
});

// const db = client.db('TodoApp');
// db.collection('Users').insertOne({
// name: 'Neeraja',
// age: '27',
// location: 'Harrison'
// }, (err, result) => {
//   if (err) {
//     return console.log('Insert data into collection failed');
//   }
// console.log(JSON.stringify(result.ops, undefined, 2));
// });
//
// client.close();
// });
