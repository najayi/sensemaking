
var getWords = function(titles){

	// -----------------------------------
	//  YOUR CODE
	//  Filter out punctuation/numbers
	//  Return words array
	// -----------------------------------	
	var words = [];
	titles.forEach(text => {
		text = text.toLowerCase();
		text = text.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
		text = text.replace(/\W|\d/g, ' ');
		text = text.replace(/\s+/g, ' ');
		text = text.trim();
		text = text.split(' ');
		words.push(text);
	});
	return words;
}


module.exports = getWords;