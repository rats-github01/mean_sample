var express = require('express');
var router = express.Router();
var Person = require('../models/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
    Person.find(function (err, result){
        if (err) {
            console.log('Unable to retrieve data from DB');
            res.status(500).json({
                message: 'Failed to retrieve data from DB.',
                err: err
            })
        }else {
            console.log('Successfully fetched documents!');
            res.status(200).json({
                message: 'Successfully fetched documents!',
                people : result
            });
        }
    });
});

/*Get specific Id*/
router.get('/:uid', function (req, res){
    console.log('FindById. uid : ', req.params.uid);
    Person.findById(req.params.uid, function (err, result){
        if (err) {
            console.log('Unable to retrieve data from DB');
            res.status(500).json({
                message: 'Failed to retrieve data from DB.',
                err: err
            })
        }else {
            console.log('Successfully fetched documents!');
            res.status(200).json({
                message: 'Successfully fetched documents!',
                people : result
            });
        }
    });
});

router.post('/', function (req, res){
  console.log(req.body);
    var p1 = new Person(req.body);
    console.log(p1);
  p1.save(function (err, result){
    if (err){
      console.log('Unable to save data into DB');
        res.status(500).json({
            message:'Failed to save data into DB.',
            err: err
        })
    }else {
        console.log('Successfully saved document!');
        res.status(201).json({
            message: 'Successfully saved document into DB.',
            user : result
        });
    }
  });
});

module.exports = router;
