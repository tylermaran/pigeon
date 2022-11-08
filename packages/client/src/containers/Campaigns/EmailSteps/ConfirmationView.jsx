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
					<br></br>
					<span>
						Selected <b>{queryData.rowCount}</b> rows from{' '}
						{source.TYPE} database <b>{source.NICKNAME}</b>. Sending{' '}
						<b>{queryData.rowCount}</b> emails through{' '}
						{provider.TYPE} provider <b>{provider.NICKNAME}</b>.
					</span>
					<br></br>
					<br></br>
					<SubTitle>Preview:</SubTitle>
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
