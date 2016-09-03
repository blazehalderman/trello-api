const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  firstname: { type: String, trim: true, default : '' },
  lastname: { type: String, trim: true, default : '' },
  username: { type: String, trim: true, default : '' },
  password: { type: String, trim:true, default : '' },
  email: { type: String, trim: true, default : '' },
  createdAt : { type: Date, default : Date.now },
  updatedAt: Date
});

//validations
UserSchema.path('firstname').required(true, 'Please enter first name');
UserSchema.path('lastname').required(true, 'Please enter last name');
UserSchema.path('username').required(true, 'Please enter a username');
UserSchema.path('email').required(true, 'Please enter your email');
UserSchema.path('password').required(true, 'Please enter a password');

module.exports = mongoose.model('User', UserSchema);
