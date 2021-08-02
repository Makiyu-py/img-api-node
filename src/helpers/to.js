const bent = require('bent');
const is = require('./is.js');

function floatOrUndefined(val) {
	return is.defined(val) ? parseFloat(val) : val;
}

async function buffer(imgUrl) {
	return await bent('buffer')(`${imgUrl}`);
}

module.exports = {
	floatOrUndefined,
	buffer,
};
