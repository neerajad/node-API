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

const db = client.db('TodoApp');
// db.collection('Todos').deleteMany({text : 'go to college'}).then((result) => {
//   console.log(result);
// });

// db.collection('Todos').deleteOne({text : 'go to college'}).then((result) => {
//   console.log(result);
// });

db.collection('Todos').findOneAndDelete({completed : false}).then((result) => {
  console.log(result);
});
//client.close();
});
