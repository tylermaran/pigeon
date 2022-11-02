import SectionContainer from '../../../components/Section';
import {
	Column,
	ColumnWrapper,
	StepNav,
	StyledButton,
} from '../styledComponents';
import { sendEmail } from '../requests';
import { SubTitle } from './styledComponents';

const ConfirmationView = ({ activeCampaign, updateCampaign, setStep }) => {
	const { queryData, source, template, provider } = activeCampaign;

	const handleSend = async () => {
		console.log(activeCampaign);
		await sendEmail({ activeCampaign });
	};

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
					<SubTitle>Query</SubTitle>
					<span>
						Selected <b>{queryData.rowCount}</b> rows from{' '}
						{source.TYPE} database <b>{source.NICKNAME}</b>
					</span>
					<SubTitle>Email Provider</SubTitle>
					<span>
						Sending <b>{queryData.rowCount}</b> emails through{' '}
						<b>{provider.TYPE}</b> provider{' '}
						<b>{provider.NICKNAME}</b>
					</span>
					<br></br>
					<br></br>
					<SubTitle>Email:</SubTitle>
					<b>Subject:</b> {template.subject}
					<br></br>
					<b>Body:</b> <i>{template.body.substring(0, 100)}</i>
					<SubTitle>Send at</SubTitle>
					{new Date().toLocaleString()}
					<StyledButton onClick={() => handleSend()}>
						Send now
					</StyledButton>
				</Column>
			</ColumnWrapper>
		</SectionContainer>
	);
};

export default ConfirmationView;
