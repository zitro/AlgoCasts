// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	obj = {};
	arr = str.split('');
	maxVal = 0;
	maxChar = '';

	for(let char of arr){
		obj[char] ? obj[char] ++: obj[char] = 1;
	}

	for(let item in obj){
		if (obj[item] > maxVal){
			maxVal = obj[item]
			maxChar = item
		}
	}
	return maxChar;
}

module.exports = maxChar;
