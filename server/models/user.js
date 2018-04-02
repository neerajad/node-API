var mongoose = require('mongoose');

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim:true,
    minlength:1
  }
});

module.exports = {User}

// var user = new User({
//   email: ' neerajad2@gmail.com '
// });
//
// user.save().then((doc) => {
//   console.log('Saved');
// },(e) => {
//   console.log('unable to save');
// });
