let mongoose = require('mongoose');

let movieSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	director: {
		type: String,
	},
	rate: {
		type: Number,
	},
});

let movie = mongoose.model('movie', movieSchema);

module.exports = movie;