const express = require('express'),
      Board = require('../models/board.js');

    const router = express.Router();

    router.post('/', function(req, res) {
      var board = new Board( { title: 'new title' } );

      board.save()
        .then(function(board) {
          res.json(board);
        }).catch(function(err) {
          res.status(422).json(err);
        });
    });

    router.patch('/:id', function(req, res) {
      Board.findById(req.params.id, function(err, board) {

        board.title = req.body.title;

        board.save()
          .then(function(board) {
            res.json(board);
          }).catch(function(err) {

            res.status(422).json(err);
          });
      });
    });

    router.get('/', function(req, res) {
      Board.find({}, function(err, boards) {
        res.json(boards);
      });
    });

    router.get('/:id', function(req, res) {
      Board.findById(req.params.id, function(err, board) {
        res.json(board);
      });
    });

    router.delete('/:id', function(req, res) {
      Board.findByIdAndRemove(req.params.id, function(err, board) {
        res.json(true);
      });
    });


    module.exports = router
