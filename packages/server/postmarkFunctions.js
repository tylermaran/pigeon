const postmark = require('postmark');

const sendEmail = async ({ email, htmlBody, subject, textBody, secretKey }) => {
	const emailClient = new postmark.ServerClient(secretKey);

	const res = await emailClient.sendEmail({
		From: 'tyler@rysolv.com',
		// HtmlBody: htmlBody,
		MessageStream: 'outbound',
		Subject: subject,
		TextBody: textBody,
		To: email,
	});
	console.log(res);
};

module.exports = { sendEmail };
