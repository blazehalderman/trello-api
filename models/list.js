const mongoose = require('mongoose');
var CardSchema = require("../models/card").Card;

const ListSchema = mongoose.Schema({
  title: { type: String, required: true, trim: true, default : '' },
  cards: [CardSchema],
  createdAt: { type: Date, default : Date.now },
  updatedAt: Date
});

//validations
ListSchema.path('title').required(true, 'List must have a title');

var List = mongoose.model('List', ListSchema);

module.exports = {
  List: List
}
