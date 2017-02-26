let Book = require('./bookModel.js');
// check routes.js to see what other functions need to be implemented. hint:"you are missing one"
module.exports ={
	// get all the books controller
	getAllBooks: function(req, res) {
		Book.find({}, function(err, AllBooks) {
			if (err) {
				res.status(500).send(err);
			}else{
				res.json(AllBooks);
			}
		});
	},
	// insert books controller
	insertBooks: function(req, res) {
		let body = req.body;
		for(let i = 0; i< body.length; i++) {
			let title = body[i].title;
			let auther = body[i].auther;
			let pageNumber = body[i].pageNumber;
			Book.create({
				title: title,
				auther: auther,
				pageNumber: pageNumber,
			}, function(err, data) {
				if (err) {
					res.status(500).send(err);
				}else{
				res.status(201);
				res.json(data);
			}
			});	
		}
		// res.send('you data saved')
	},
	getByTitel: function(req, res) {
		Book.find({title: req.params.title}, function(err, book) {
			if(err) {
				console.log('errr');
			}else{
				res.json(book);
			}
		});
	},
};
