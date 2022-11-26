import {
	PreviewContainer,
	Subject,
	SubHeader,
	EmailBody,
} from './styledComponents';

const EmailPreview = ({ body, subject, toEmail }) => {
	return (
		<PreviewContainer>
			<SubHeader>Deliver to</SubHeader>
			<Subject>{toEmail}</Subject>
			<SubHeader>Subject</SubHeader>
			<Subject>{subject}</Subject>
			<SubHeader>Body</SubHeader>
			<EmailBody dangerouslySetInnerHTML={{ __html: body }} />
		</PreviewContainer>
	);
};

export default EmailPreview;
