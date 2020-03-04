/**
 * Bruno Rivera
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create schema
var RequestLogs = new Schema({
  device: String,
  requestId: String,
  userName: String,
  requestDate: String
});

module.exports = mongoose.model('RequestLogs', RequestLogs);
