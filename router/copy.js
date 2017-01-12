var fs = require('fs');
var config = require('../config');
var router = require('express').Router();

router.get('/', function(req, res, next){
	var list = fs.readdirSync('f:/');
	
	res.render('copy',{user:'',file:list})
})

router.put('/', function(req, res, next){

	var folder = req.body.folder;

	var list = fs.readdirSync('f:/'+folder);

	res.json({file:list});

})

router.get('/file', function(req, res, next){

	var name = req.query.name;

	res.download('F:/'+name, function(err){
		if (err) {
			console.log(err)
		}
	});
})

module.exports = router;