const Handlebars = require('handlebars');

const formatTemplate = ({ source, data }) => {
	const template = Handlebars.compile(source);
	return template(data);
};

module.exports = { formatTemplate };
