require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { resolve } = require('path');
const app = express();

app.use(express.json());
app.use(cors());

const { queryPostgres } = require('./postgresFunctions');
const { sendEmail } = require('./postmarkFunctions');
const { formatTemplate } = require('./formatTemplate');

// Ping
app.get('/api/ping', (req, res, next) => {
	return res.status(200).send('pong');
});

app.post('/api/query', async (req, res, next) => {
	const { source, query } = req.body;

	try {
		const { rows, rowCount, fields } = await queryPostgres({
			source,
			query,
		});

		const templateValues = fields.map((el) => el.name);

		return res.status(200).json({
			data: { result: rows.slice(0, 100), templateValues, rowCount },
		});
	} catch (error) {
		return res.status(400).json({ error: error.message });
	}
});

app.post('/api/test-connection', async (req, res, next) => {
	try {
		await queryPostgres({
			source,
			query: 'SELECT 1',
		});

		return res.status(200);
	} catch (error) {
		return res.status(400).json({ error: error.message });
	}
});

app.post('/api/preview-email', async (req, res, next) => {
	const { template, queryData } = req.body;
	console.log(req.body);
	const test = queryData.result[0];
	const body = formatTemplate({ source: template.body, data: test });
	const subject = formatTemplate({ source: template.subject, data: test });
	return res.status(200).json({ body, subject });
});

app.post('/api/send-email', async (req, res, next) => {
	const { provider, template, query, source } = req.body;

	// Run query again to get full data
	const { rows, rowCount, fields } = await queryPostgres({
		source,
		query,
	});

	const test = rows[0];
	const body = formatTemplate({ source: template.body, data: test });
	const subject = formatTemplate({ source: template.subject, data: test });

	await sendEmail({
		email: 'tyler.maran@gmail.com',
		htmlBody: body,
		secretKey: provider.API_KEY,
		subject: subject,
		textBody: body,
	});

	return res.status(200);
});

const outputPath = resolve(process.cwd(), '../client/build');
app.use('/', express.static(outputPath));
app.get('*', (req, res) => res.sendFile(resolve(outputPath, 'index.html')));

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
