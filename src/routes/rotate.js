const is = require('../helpers/is.js');
const to = require('../helpers/to.js');
const sharp = require('sharp');
const router = require('express').Router();


router.get('/rotate', async (req, res) => {
	let imgUrl = req.query?.image ?? undefined;
	if (typeof imgUrl !== 'undefined') {
		let deg = req.query?.degrees ?? 90;
		let buffer = await to.buffer(`${imgUrl}`);
		if (!is.undefinedOrNum(deg)) {
			res.status(400).json({ message: 'invalid degrees given' });
			return;
		}
		sharp(buffer)
			.rotate(to.floatOrUndefined(deg))
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
