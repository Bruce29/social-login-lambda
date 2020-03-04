/**
 * Bruno Rivera
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create schema
var Users = new Schema({
  id: String,
  name: String,
  someID: String
});

module.exports = mongoose.model('Users', Users);
