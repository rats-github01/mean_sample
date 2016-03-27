// path : /data
var express = require('express');
var router = express.Router();

var persons = [
    {
        "_id" : "56f81e6eab86c2181a50403a",
        "name" : "sarath",
        "email" : "sarath@io.com"
    },
    {
        "_id" : "56f81e81ab86c2181a50403b",
        "name" : "maddy",
        "email" : "maddy@io.com"
    }
];

router.get('/', function(req, res, next) {
    res.json({
    persons:persons});
});

module.exports = router;
