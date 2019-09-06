var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Development with Node.JS' });
});

router.get('/persons', function(req, res) {
  var db = req.db;
  var collection = db.collection('persons');
  collection.find({},{},function(e,docs){
    res.render('persons', {
      "persons" : docs
    });
  });
});

module.exports = router;
