var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

module.exports = {Todo}

// var newTodo = new Todo({
//   text: 'Cook Dinner'
// });
//
// newTodo.save().then((doc) => {
//   console.log('saved todo ', doc);
// }, (e) => {
//   console.log('Unable to save');
// })
//
// var otherTodo = new Todo({
//   text: 'study node',
//   completed: true,
//   completedAt: 123
// });
//
// otherTodo.save().then((doc) => {
//   console.log(doc);
// }, (e) => {
//   console.log('could not save new todo');
// });
