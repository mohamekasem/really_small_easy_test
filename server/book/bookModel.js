let mongoose = require('mongoose');

let bookSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	auther: {
		type: String,
	},
	pageNumber: {
		type: Number,
	},
});

let book = mongoose.model('book', bookSchema);

module.exports = book;