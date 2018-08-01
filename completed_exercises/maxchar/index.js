// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	let max = 0;
	let maxChar = '';
	let obj = {};

	for (let char of str){
		obj[char] = obj[char] + 1 || 1;
	}

	for (let char in obj){
		if(obj[char] > max){
			max = obj[char];
			maxChar = char;
			
		}
	}

}

module.exports = maxChar;



// const charMap = {};
// let max = 0;
// let maxChar = '';
//
// for (let char of str) {
// 	if (charMap[char]) {
// 		charMap[char]++;
// 	} else {
// 		charMap[char] = 1;
// 	}
// }
//
// for (let char in charMap) {
// 	if (charMap[char] > max) {
// 		max = charMap[char];
// 		maxChar = char;
// 	}
// }
//
// return maxChar;
