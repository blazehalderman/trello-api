const express = require('express'),
      Card = require('../models/card.js');

      const router = express.Router();

      router.post('/', function(req, res) {
        var card = new Card(req.body)

        card.save()
          .then(function(card) {

            res.json(card);
          }).catch(function(err) {
            res.status(422).json(err);
          });
      });

      router.patch('/:id', function(req, res) {
        Card.findById(req.params.id, function(err, card) {

          card.body = req.body.body;

          card.save()
            .then(function(card) {
              res.json(card);
            }).catch(function(err) {
              res.status(422).json(err);
            });
          });
        });

        router.get('/', function(req, res) {
          Card.find({}, function(err, cards) {
            res.json(cards);
          });
        });

        router.get('/:id', function(req, res) {
          Card.findById(req.params.id, function(err, card) {
            res.json(card);
          });
        });

      router.delete('/:id', function(req, res) {
        Card.findByIdAndRemove(req.params.id, function(err, post) {
          res.json(true);
        })
      });

        module.exports = router;
