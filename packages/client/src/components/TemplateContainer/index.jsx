import { StyledEmailBody, StyledSubject } from './styledComponents';

const TemplateContainer = ({ template, updateTemplate }) => {
	const { subject, body } = template;
	return (
		<div>
			Subject
			<StyledSubject
				onChange={(e) => updateTemplate({ subject: e.target.value })}
				value={subject}
			></StyledSubject>
			Body
			<StyledEmailBody
				onChange={(e) => updateTemplate({ body: e.target.value })}
				value={body}
			></StyledEmailBody>
		</div>
	);
};

export default TemplateContainer;
