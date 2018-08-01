// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
	let strA = helperChar(stringA);
	let strB = helperChar(stringB);

for (char in strA){
	if (Object.keys(strA).length !== Object.keys(strB).length){
		return false;
	}else{
	for(let char in strA){
		if(strA[char] !== strB[char]){
			return false;
		}
	}
	return true;

	}
}



}

function helperChar(str){
	obj = {};

for (let char of str.replace([/^\w/g]).toLowerCase()){
	obj[char] = obj[char] + 1 || 1;
}
return obj;

}

anagrams('testing this stuff out', 'testing this stuff out')

module.exports = anagrams;






// function anagrams(stringA, stringB) {
// 	let strA = stringA.replace(/[^\w]/g, '').toLowerCase();
// 	let strB = stringB.replace(/[^\w]/g, '').toLowerCase();
//
// 	let objA = objHelper(strA)
// 	let objB = objHelper(strB)
//
// 	if(strA.length !== strB.length){
// 		return false
// 	}else{
//
// 		for (let element in objA){
// 			if (objA[element] !== objB[element]){
// 				return false
// 			}
// 		}
// 		return true
// 	}//end of else statement
// }//end of func
//
//
// function objHelper(str){
// 	let obj = {};
// 	for (let element of str){
// 		obj[element]? obj[element]++: obj[element] = 1;
// 	}
// 	return obj;
// }
