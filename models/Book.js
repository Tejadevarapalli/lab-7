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
module.exports = Book;
