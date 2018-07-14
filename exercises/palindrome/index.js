// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
return str.split('').every((char, i)=> {
	return char === str[str.length - i - 1];
});

}

module.exports = palindrome;


//try 1
// function palindrome(str) {
// 	reverse = str.split('').reverse().join('')
// 	if(str !== reverse){
// 		return false;
// 	}else if(str.length % 2 === 0){
// 		return true;
// 	}else{
// 		return true;
// 	}
//
// }


//refactored
// function palindrome(str) {
// 	reverse = str.split('').reverse().join('')
// 	return str === reverse;
//
// }
