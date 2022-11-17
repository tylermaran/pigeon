import { PreviewContainer, Subject, EmailBody } from './styledComponents';

const EmailPreview = ({ body, subject, toEmail }) => {
	return (
		<PreviewContainer>
			<Subject>{toEmail}</Subject>
			<Subject>{subject}</Subject>
			<EmailBody dangerouslySetInnerHTML={{ __html: body }} />
		</PreviewContainer>
	);
};

export default EmailPreview;
