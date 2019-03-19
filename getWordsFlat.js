
var getWordsFlat = function(words){

	// -----------------------------------
	//  YOUR CODE
	//  Flatten the 2D words array using reduce
	//  Return flat words array
	// -----------------------------------	
	var wordsFlat = [];
	words.reduce(function(a,word){
		a.push(...word);
		return a;
	},wordsFlat)

	return wordsFlat;
}


module.exports = getWordsFlat;