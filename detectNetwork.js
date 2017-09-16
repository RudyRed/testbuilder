// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var cardTest = function(cardNum, lens, pre, preIndex) {
	return lens.some(x => x === cardNum.length) && pre.some(x => x === cardNum.slice(0, preIndex + 1))
}

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
	var numericCard = Number(cardNumber);
	if (cardTest(cardNumber, [14], ['38', '39'], 1)) {
 		return "Diner's Club";
	}
	if (cardTest(cardNumber, [15], ['34', '37'], 1)) {
 		return "American Express";
	}
	if (cardTest(cardNumber, [13, 16, 19], ['4'], 0)) {
 		return "Visa";
	}
	if (cardTest(cardNumber, [16], ['51', '52', '53', '54', '55'], 1)) {
 		return "MasterCard";
	}
  // Once you've read this, go ahead and try to implement this function, then return to the console.
};
/*
var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
	var numericCard = Number(cardNumber);
	if (cardNumber.length === 14 && (cardNumber.slice(0,2) === '38' || cardNumber.slice(0,2) === '39')) {
 		return "Diner's Club";
	}
	if (cardNumber.length === 15 && (cardNumber.slice(0,2) === '34' || cardNumber.slice(0,2) === '37')) {
 		return "American Express";
	}
  // Once you've read this, go ahead and try to implement this function, then return to the console.
};
*/