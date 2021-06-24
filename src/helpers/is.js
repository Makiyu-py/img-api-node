function properSigma(sigma) {
	return !undefinedOrNum(sigma) || inRange(parseFloat(sigma), 0.3, 500);
}

function inRange(val, min, max) {
	return val >= min && val <= max;
}

function undefinedOrNum(val) {
	return !defined(val) || !isNaN(parseFloat(val));
}

function defined(arg) {
	return typeof arg !== 'undefined' && arg !== null;
}

module.exports = {
	properSigma,
	undefinedOrNum,
	defined,
};
