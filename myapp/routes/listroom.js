var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient
var headerNameList = ['mrt','title','url']

/* GET home page. */
router.get('/', function(req, res, next) {
  MongoClient.connect('mongodb://localhost:27017/smartlife', function (err, db) {
  if (err) throw err

  db.collection('rentrooms').find().toArray(function (err, result) {
    if (err) throw err
	res.render('listroom', { title: 'Rental Rooms', 'roomlist': result, 'headers':headerNameList});
    //console.log(result)
  })
})
	
  
  //res.send('respond with a resource');
});

module.exports = router;
