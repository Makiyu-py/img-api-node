const express = require('express');
const app = express();
const port = 3000;

app.use('/api/v1', [
	require('./routes/rotate.js'),
	require('./routes/blur.js'),
	require('./routes/negate.js'),
]);

app.listen(port, () => {
	console.log(`IMG API listening at http://localhost:${port}`);
});
