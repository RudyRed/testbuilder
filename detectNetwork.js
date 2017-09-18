// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)
/*
var cardTest = function(cardNum, lens, pre, preIndex) {
	return lens.some(x => x === cardNum.length) && pre.some(x => x === cardNum.slice(0, preIndex + 1))
} */

var cardTest = function(cardNum, lens, pre) {
	return lens.some(x => x === cardNum.length) && pre.some(x => x === cardNum.slice(0, x.length))
}

var range = function(start, end) {
    var foo = [];
    for (var i = start; i <= end; i++) {
        foo.push(JSON.stringify(i));
    }
    return foo;
}

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
	var numericCard = Number(cardNumber);
	if (cardTest(cardNumber, [16, 18, 19], ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'])) {
		return 'Switch'
	}
	if (cardTest(cardNumber, [14], ['38', '39'])) {
 		return "Diner's Club";
	}
	if (cardTest(cardNumber, [15], ['34', '37'])) {
 		return "American Express";
	}
	if (cardTest(cardNumber, [13, 16, 19], ['4'])) {
 		return "Visa";
	}
	if (cardTest(cardNumber, [16], ['51', '52', '53', '54', '55'])) {
 		return "MasterCard";
	}
	if (cardTest(cardNumber, [16, 19], ['6011', '644', '645', '646', '647', '648', '649', '65'])) {
 		return "Discover";
	}
	if (cardTest(cardNumber, [12, 13, 14, 15, 16, 17, 18, 19], ['5018', '5020', '5038', '6304'])) {
 		return "Maestro";
	}
	if (cardTest(cardNumber, [16, 17, 18, 19], range(622126, 622925).concat(range(624, 626), range(6282, 6288)))) {
		return 'China UnionPay';
	}
  // Once you've read this, go ahead and try to implement this function, then return to the console.
};

