const to = require('../helpers/to.js');
const sharp = require('sharp');
const router = require('express').Router();


router.get('/negate', async (req, res) => {
	let imgUrl = req.query?.image ?? undefined;
	if (typeof imgUrl !== 'undefined') {
		let buffer = await to.buffer(`${imgUrl}`);
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
