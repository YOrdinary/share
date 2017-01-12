var ejs = require('ejs')
	path = require('path'),
	express = require('express'),
	copy = require('./router/copy'),
	bodyParser = require('body-parser'),
	cookieParser = require('cookie-parser'),
	app = express();

/**
*	app set
*/
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.engine('.html', require('ejs').__express);  
app.set('view engine', 'html');
app.use(express.static('public'));


/*
*	配置路由
*/
app.use('/copy',copy);

/*
*	配置404页面
*/
app.use(function(req, res, next) {
	res.status(404).render('404',{});
});

app.listen(3000);