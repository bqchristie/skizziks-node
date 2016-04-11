var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    var users = [
        {name: 'Bob'},
        {name: 'Doug'},
        {name: 'Garth'},
        {name: 'Dwayne'},
        {name: 'Dinglebert'},
    ]
    res.send(users);
});

module.exports = router;
