const is = require('../helpers/is.js');
const to = require('../helpers/to.js');
const sharp = require('sharp');
const bent = require('bent');
const router = require('express').Router();

const getBuffer = bent('buffer');

router.get('/negate', async (req, res) => {
	let imgUrl = req.query?.image ?? undefined;
	if (typeof imgUrl !== 'undefined') {
		let buffer = await getBuffer(`${imgUrl}`);
		sharp(buffer)
			.negate()
			.toBuffer(function (err, outputBuffer, info) {
				if (err) throw err;
				res.end(Buffer.from(outputBuffer, 'base64'));
				// console.log(info);
			});
	} else {
		res.status(400).json({ message: "missing 'image' query" });
	}
});

module.exports = router;
