const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref : 'User' },
  body: { type: String, trim: true, default : '' },
  createdAt: { type: Date, default : Date.now },
  updatedAt: Date
});

CommentSchema.path('body').required(true, 'Comment must have text');

var Comment = mongoose.model('Comment', CommentSchema);

module.exports = {
  Comment: Comment
}
