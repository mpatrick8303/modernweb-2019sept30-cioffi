const privateSpecialCharacters = ">>";

module.exports = function arrayToText(array) {
	return array.join(privateSpecialCharacters);
}
