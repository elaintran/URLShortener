var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var urlSchema = new Schema({
	originalURL: {type: String, required: true},
	newURL: String
});

var urlModel = mongoose.model('shorturl', urlSchema);

exports.urlSchema = urlModel;