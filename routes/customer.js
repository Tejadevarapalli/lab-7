var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
  Customer_id: String,
  Customer_name: String,
  Customer_email: String,
  Joined_year: String,
  updated_date: {type: Date, default: Date.now},
});
/**
 * @class Book
 * @typeof Model<BookSchema>
 */
const Book = mongoose.model('Customercollection',BookSchema);
module.exports = Bookvar express = require('express');
var router = express.Router();
var Book = require('../models/Customer.js');

/* GET ALL customers */
router.get('/', function (req, res, next) {
  Book.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE customer BY ID */
router.get('/:id', function (req, res, next) {
  Book.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE customer */
router.post('/', function (req, res, next) {
  Book.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE customer */
router.put('/:id', function(req, res, next){
  Book.findByIdAndUpdate(req.params.id, req.body, function (err,post){
    if (err) return next(err);
    res.json(post);
  })
})
/* DELETE customer */
router.delete('/:id', function(req, res, next){
  Book.findByIdAndDelete(req.params.id, function (err,post){
    if (err) return next(err);
    res.json(post);
  })
})
module.exports = router;
;
