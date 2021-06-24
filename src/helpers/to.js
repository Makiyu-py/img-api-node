const is = require('./is.js');

function floatOrUndefined(val) {
	return is.defined(val) ? parseFloat(val) : val;
}

module.exports = {
	floatOrUndefined,
};
