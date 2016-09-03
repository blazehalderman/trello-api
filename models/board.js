const mongoose = require('mongoose');
var ListSchema = require("../models/list").List;

const BoardSchema = mongoose.Schema({
  title: { type: String, trim: true, default : '' },
  lists: [ListSchema],
  user: { type: mongoose.Schema.Types.ObjectId, ref : 'User' },
  createdAt: { type: Date, default : Date.now },
  updatedAt: Date
});

//validations
BoardSchema.path('title').required(true, 'Board must have a title');

module.exports = mongoose.model('Board', BoardSchema);
