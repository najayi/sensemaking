
var getScores = function(wordsFlat){

	// -----------------------------------
	//  YOUR CODE
	//  Count the word frequency
	//  Return object with word counts
	// -----------------------------------
	scores = {};
	wordsFlat.forEach(function(word){if (word in scores){
		scores[word] += 1;
	}
	else{
		scores[word] = 1;
	}
	})	

	return scores;

}


module.exports = getScores;