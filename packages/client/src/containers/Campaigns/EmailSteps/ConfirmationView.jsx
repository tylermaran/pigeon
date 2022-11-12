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
import { SubTitle } from './styledComponents';

const ConfirmationView = ({ activeCampaign, updateCampaign, setStep }) => {
	const [preview, setPreview] = useState({ subject: '', body: '' });
	const { queryData, source, provider } = activeCampaign;

	const handleSend = async () => {
		await sendEmail({ activeCampaign });
	};

	const fetchPreview = async () => {
		const { body, subject } = await previewEmail({ activeCampaign });
		setPreview({ body, subject });
	};

	useEffect(() => {
		fetchPreview();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

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

					<EmailPreview
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
