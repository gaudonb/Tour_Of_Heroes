var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var HeroSchema = new Schema({
	rating: {type: Number, ref: 'rating', required: true},
	name: {type: String, ref: 'Name', required: true}
},{collection: 'heroes'});

// HeroSchema
// .virtual('url')
// .get(function(){
// 	return '/heroes/' + this._id;
// });

module.exports = mongoose.model('Hero', HeroSchema);