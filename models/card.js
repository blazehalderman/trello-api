const mongoose = require('mongoose');
var CommentSchema = require("../models/comment").Comment;

const CardSchema = mongoose.Schema({
  body: { type: String, trim: true, default : '' },
  comments: [CommentSchema],
  createdAt: { type: Date, default : Date.now },
  updatedAt: Date
});

//validations
CardSchema.path('body').required(true, 'Card must have a description');

var Card = mongoose.model('Card', CardSchema);

module.exports = {
  Card: Card
}
