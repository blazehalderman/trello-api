const express = require('express'),
      Comment = require('../models/comment.js');

      const router = express.Router();

      router.post('/', function(req, res) {
        var comment = new Comment(req.body);

        comment.save()
          .then(function(comment) {
            res.json(comment);
          }).catch(function(err) {
            res.status(422).json(err);
          });
      });

      router.get('/', function(req, res) {
        Comment.find({}, function(err, comments) {
          res.json(comments);
        });
      });

      router.get('/:id', function(req, res) {
        Comment.findById(req.params.id, function(err, comment) {
          res.json(comment);
        });
      });

      router.delete('/:id', function(req, res) {
        Comment.findByIdAndRemove(req.params.id, function(err, comment) {
          res.json(true);
        });
      });

      module.exports = router;
