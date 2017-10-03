var express = require('express');
var Restaurant = require('../model/modelAPI');
var router = express.Router();


router.route('/')
  .get(function (request, response) {
    Restaurant.find(function (error, entries) {
      if (error) {
        response(500).send(error);
      } else {
        response.send(entries);
      }
    });
  });

router.route('/:id')
.get(function (request, response) {
    var id = request.params.id;

    Restaurant.findById(id, function (error, entry) {
      if (error) {
        response.status(500).send(error);
      } else {
        response.send(entry);
      }
    })
  });
router.route('/:id')
.put(function (request, response) {
    var id = request.params.id;

    Restaurant.findByIdAndUpdate(id,request.body, function (error, entry) {
      if (error) {
        response.status(500).send(error);
      } else {
        response.send(entry);
      }
    });
  });
router.route('/:id')
.delete(function (request, response) {
    var id = request.params.id;
    Restaurant.findByIdAndRemove(id, function (error, entry, result) {
      if (error) {
        response.status(500).send(error);
      } else {
        response.send(entry);
      }
    });
  });

router.route('/')
  .post(function (request,response) {
    var entry = new Restaurant(request.body);
    entry.save(function(error){
      if(error){
        response.status(500).send(error);
      }
      else{
        response.status(201).send(entry);
      }
    });
  });


module.exports = router;
