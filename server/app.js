var express = require('express');
var indexRouter = require('./routes');
var path = require('path');
var cookieParser = require('cookie-parser');


var app = express();


var mongoose = require('mongoose');
var mongoDB = 'mongodb://admin:password@localhost:27017/tour_of_heroes_db'
mongoose.set('useFindAndModify', false);
mongoose.connect(mongoDB,{useNewUrlParser: true});
//connect to the database using the provided URI string

mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.get('/', function (req,res) {
	res.send('Hello World!');
});

app.listen(8000, function(){
	console.log('example app on port 8000');
});

