var censoredWords = {};
var customCensoredWords = [];
function censor(inStr){
	for(idx in customCensoredWords){
		inStr.replace(censoredWords[idx], '****');
	}
	for (idx in censoredWords) {
		inStr.replace(censoredWords[idx], '****');
	};
	return inStr;
}
function addCensoredWords(word){ customCensoredWords.push(word);}
function getCensoredWords(){ return customCensoredWords.concat(censoredWords);}
exports.censor = censor;
exports.addCensoredWords = addCensoredWords;
exports.getCensoredWords = getCensoredWords;