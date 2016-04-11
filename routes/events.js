var express = require('express');
var router = express.Router();
var Event = require('../models/event');

router.get('/', function (req, res, next) {
    Event.find(function (err, events) {
        if (err) res.send(err);
        res.json(events);
    })

});

router.post('/', function (req, res) {

    var event = new Event();

    event.name = req.body.name;

    event.save(
        function (err) {
            if (err) res.send(err);
            res.json({message: 'success', data: event});

        }
    );

});

module.exports = router;