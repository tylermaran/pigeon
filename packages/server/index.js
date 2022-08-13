require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const { pgConnect } = require('./postgresFunctions');

// Ping
app.get('/', (req, res, next) => {
	return res.status(200).send('pong');
});

app.post('/query', async (req, res, next) => {
	const { campaign } = req.body;
	const { source, query } = campaign;

	try {
		const pool = pgConnect({
			DB_NAME: source.DB_NAME,
			DB_HOST: source.DB_HOST,
			DB_PASSWORD: source.DB_PASSWORD,
			DB_PORT: source.DB_PORT,
			DB_USER: source.DB_USER,
		});

		const client = await pool.connect();
		const readOnly = 'SET SESSION CHARACTERISTICS AS TRANSACTION READ ONLY';
		await client.query(readOnly);
		const data = await client.query(query);
		const { rows, rowCount, fields } = data;

		const templateValues = fields.map((el) => el.name);

		return res.status(200).json({
			data: { result: rows.slice(0, 100), templateValues, rowCount },
		});
	} catch (error) {
		console.log(error);
		return res.status(400).json({ error: error.message });
	}
});

app.post('/test-connection', async (req, res, next) => {
	return res.status(200);
});

app.post('/send-email', async (req, res, next) => {
	return res.status(200);
});

app.use((req, res, next) => {
	const error = new Error('Not Found');
	error.status = 404;
	next(error);
});

// Throw errors from anywhere in the app
app.use((error, req, res, next) => {
	res.status(error.status || 500).json({
		error: {
			message: error.message,
		},
	});
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});

module.exports = app;
