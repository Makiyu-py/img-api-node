const is = require('../helpers/is.js');
const to = require('../helpers/to.js');
const sharp = require('sharp');
const bent = require('bent');
const router = require('express').Router();

const getBuffer = bent('buffer');

router.get('/blur', async (req, res) => {
	let imgUrl = req.query?.image ?? undefined;
	if (is.defined(imgUrl)) {
		let buffer = await getBuffer(`${imgUrl}`);
		let sigma = req.query?.sigma ?? undefined;
		if (!is.properSigma(sigma)) {
			res.status(400).json({
				message:
					'invalid sigma value given. Lowest sigma value must be 0.3 while the highest value must be 500.',
			});
		} else {
			sharp(buffer)
				.blur(to.floatOrUndefined(sigma))
				.toBuffer(function (err, outputBuffer, info) {
					if (err) throw err;
					res.end(Buffer.from(outputBuffer, 'base64'));
					// console.log(info);
				});
		}
	} else {
		res.status(400).json({ message: "missing 'image' query" });
	}
});

module.exports = router;
