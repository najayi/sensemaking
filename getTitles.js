
var getTitles = function(mitcourses){

	const cheerio = require('cheerio');
	const $ = cheerio.load(mitcourses);

	var titles = []
	$('h3').each(function(i,course){
		titles.push($(course).text());
	})

	return titles;
}


module.exports = getTitles;