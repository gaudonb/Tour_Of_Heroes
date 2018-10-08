var Hero = require('../models/Heroes');

exports.create = function(req,res){

	var newHero = new Hero({
		rating: req.body.rating,
		name: req.body.name
	});

	newHero.save(function(err,hero){
		if (err) return console.error(err);
		console.log("New hero created!");

		res.status(200).json({
			message: "Succesfully recieved",
			data: newHero
		});
	});
}

exports.getHeroes = function(req,res){
	var nameToFind = new RegExp(req.query.name);

	console.log(nameToFind)

	Hero.find({'name': {$regex: nameToFind, $options: 'i'}})
		.exec(function(error,heroes){
		if (error){
			return console.error(error);
		}else{
			console.log("Succesfully found heroes");
			res.status(200).json({
				data: heroes
			});
		};
	});
};

exports.getHero = function(req,res){
	Hero.findById(req.params.id).exec(function(error,hero){
		if (error){
		
		}else{
			console.log("Succesfully found hero");
			res.status(200).json({
				data: hero
			});
		};
	});
};

exports.update = function(req,res){
	var query = {'_id': req.body._id};

	var updateHero = {
		name: req.body.name,
		rating: req.body.rating
	};

	Hero.findOneAndUpdate(query, updateHero, function(err){
		if (err) return res.status(500).json({
			error: err
		});

		console.log("Succesfully update hero")
		return res.status(200).json({
			message: "Succesfully updated hero"
		});
	});
}

exports.delete = function(req, res){
	var query = {'_id': req.params.id};

	Hero.findOneAndRemove(query, function(err){
		if (err) return res.status(500).json({
			error: err
		});

		console.log("Succesfully deleted hero")

		return res.status(200).json({
			message: "Succesfully deleted hero"
		});
	});
}