var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var app = express();

//read env files in console
const dotenv = require('dotenv');
dotenv.config();
//var shortURL = require('./models/shorturl');

//connect to mongodb
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true}, function() {console.log(mongoose.connection.readyState)});

app.get("/api/shorturl/:new(*)", function(req, res) {
	var newURL = req.params.new;
	if (err) {
		res.json({"error": "invalid URL"})
	}
	res.json({"original url": newURL});
})

//express server & serve HTML file
app.get("/", function(req, res) {
    res.sendFile( __dirname + "/views/index.html");
});

//access public/css folder
app.use(express.static('public'));

//port for heroku
var port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('App listening on port 3000!')
});