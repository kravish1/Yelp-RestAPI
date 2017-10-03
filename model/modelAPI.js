var mongoose  = require('mongoose');
var Schema = mongoose.Schema;

var yelpSchema = {
	name: String,
	address: String,
	description: String
}

module.exports = mongoose.model('Restaurant',yelpSchema);
