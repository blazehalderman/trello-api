const express = require('express'),
      List = require('../models/list.js');

      const router = express.Router();

      router.post('/', function(req, res) {
        var list = new List(req.body);

        list.save()
          .then(function(list) {
            res.json(list);
          }).catch(function(err) {
            res.status(422).json(err);
          });
      });

      // router.patch('/:id', function(req, res) {
      //   List.findById(req.params.id, function(err, list) {
      //
      //     list.title = req.body.title;
      //
      //     list.save()
      //       .then(function(list) {
      //         res.json(list);
      //       }).catch(function(err) {
      //
      //         res.status(422).json(err);
      //       });
      //   });
      // });

      router.get('/', function(req, res) {
        List.find({}, function(err, lists) {
          res.json(lists);
        });
      });

      router.get('/:id', function(req, res) {
        List.findById(req.params.id, function(err, list) {
          res.json(list);
        });
      });

      module.exports = router;
