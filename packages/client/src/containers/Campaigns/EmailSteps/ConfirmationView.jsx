import { useEffect, useState } from 'react';
import SectionContainer from '../../../components/Section';
import EmailPreview from '../../../components/EmailPreview';
import {
	Column,
	ColumnWrapper,
	StepNav,
	StyledButton,
} from '../styledComponents';
import { sendEmail, previewEmail } from '../requests';
import { SubTitle, PreviewSwitcher } from './styledComponents';

const ConfirmationView = ({ activeCampaign, updateCampaign, setStep }) => {
	const [preview, setPreview] = useState({ subject: '', body: '' });
	const [previewIndex, setPreviewIndex] = useState(0);
	const { queryData, source, provider } = activeCampaign;

	console.log(previewIndex);
	const handleSend = async () => {
		await sendEmail({ activeCampaign });
	};

	const fetchPreview = async () => {
		const { body, subject, toEmail } = await previewEmail({
			activeCampaign,
			previewIndex,
		});
		setPreview({ body, subject, toEmail });
	};

	useEffect(() => {
		fetchPreview();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [previewIndex]);

	return (
		<SectionContainer>
			<ColumnWrapper>
				<Column>
					<StepNav>
						<StyledButton onClick={() => setStep(1)}>
							ᐊ Edit Template
						</StyledButton>
					</StepNav>
					<h2>Review Notification</h2>
					<br></br>
					<span>
						Selected <b>{queryData.rowCount}</b> rows from{' '}
						{source.TYPE} database <b>{source.NICKNAME}</b>. Sending{' '}
						<b>{queryData.rowCount}</b> emails through{' '}
						{provider.TYPE} provider <b>{provider.NICKNAME}</b>.
					</span>
					<br></br>
					<SubTitle>Preview:</SubTitle>
					<PreviewSwitcher>
						<button
							onClick={() => setPreviewIndex(previewIndex - 1)}
						>
							Prev
						</button>
						&nbsp;{previewIndex} / {queryData.rowCount}&nbsp;
						<button
							onClick={() => setPreviewIndex(previewIndex + 1)}
						>
							Next
						</button>
					</PreviewSwitcher>
					<EmailPreview
						toEmail={preview.toEmail}
						subject={preview.subject}
						body={preview.body}
					/>

					<StyledButton onClick={() => handleSend()}>
						Send now
					</StyledButton>
				</Column>
			</ColumnWrapper>
		</SectionContainer>
	);
};

export default ConfirmationView;
