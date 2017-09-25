var express = require('express'),
    router = express.Router(),
    config = require('../config/config.json'),
    mongoose = require('../db/mongoose'),
    assert = require('assert'),
    deliveryModel = require('../model/deliveryModel');

router.get('/', function (req, res) {
    deliveryModel.find(function (err, deliveries) {
        (err) ? res.send(err) : res.send(deliveries);
    });
});

router.post('/', function (req, res, next) {
    var delivery = new deliveryModel(req.body);
    delivery.save(function (err, delivery) {
        try {
            //validação extra dos campos..
            assert.deepEqual(Object.keys(req.body), Object.keys(config.deliveryValdtr), '');
            res.send("salvo");
        } catch (err) {            
            err.status = 400;
            res.send({ "erro": err });
		    next(err);           
        }
    });
});

router.delete('/', function (req, res) {
    deliveryModel.remove(function (err, delivery) {
        (err) ? res.send(err) : res.send("registros excluídos");
    });
});


module.exports = router;