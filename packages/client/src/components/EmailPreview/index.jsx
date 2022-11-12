import { PreviewContainer, Subject, EmailBody } from './styledComponents';

const EmailPreview = ({ body, subject }) => {
	return (
		<PreviewContainer>
			<Subject>{subject}</Subject>
			<EmailBody dangerouslySetInnerHTML={{ __html: body }} />
		</PreviewContainer>
	);
};

export default EmailPreview;
