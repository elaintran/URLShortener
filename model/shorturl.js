var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var urlSchema = new Schema({
	originalURL: String,
	newURL: String
}, {timestamps: true});