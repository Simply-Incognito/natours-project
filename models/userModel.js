const mongoose = require('mongoose');

const userSchema = new mongoose.schema({
  name: {
    type: String,
    required: [true, "Name is required!"]
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true
  },
  password: {
    type: String,
    required: [true, "Password is required!"],
    unique: [true, "password is taken!"]
  },
  confirmPassword: {
    type: String,
    required: [true, 'Please confirm password!']
  },
  photo: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;