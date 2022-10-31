import SectionContainer from '../../../components/Section';
import {
	Column,
	ColumnWrapper,
	StepNav,
	StyledButton,
} from '../styledComponents';
import { SubTitle } from './styledComponents';

const ConfirmationView = ({ activeCampaign, updateCampaign, setStep }) => {
	console.log(activeCampaign);
	const { queryData, source, template, provider } = activeCampaign;
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
					Querying <b>{queryData.rowCount}</b> row from {source.TYPE}{' '}
					database <b>{source.NICKNAME}</b>
					<SubTitle>Provider</SubTitle>
					Sending through <b>{provider.TYPE}</b> provider{' '}
					<b>{provider.NICKNAME}</b>
					<SubTitle>Email</SubTitle>
					<b>Subject:</b> {template.subject}
					<br></br>
					<b>Body:</b> <i>{template.body.substring(0, 100)}</i>
					<SubTitle>Send at</SubTitle>
					{new Date().toLocaleString()}
					<StyledButton onClick={() => setStep(1)}>
						Send now
					</StyledButton>
				</Column>
			</ColumnWrapper>
		</SectionContainer>
	);
};

export default ConfirmationView;
