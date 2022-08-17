import SectionContainer from '../../../components/Section';
import {
	Column,
	ColumnWrapper,
	StepNav,
	StyledButton,
} from '../styledComponents';

const ConfirmationView = ({ activeCampaign, updateCampaign, setStep }) => {
	return (
		<SectionContainer>
			<ColumnWrapper>
				<Column>
					<StepNav>
						<StyledButton onClick={() => setStep(1)}>
							ᐊ Edit Template
						</StyledButton>
					</StepNav>
					<h2>Confirm Email</h2>
				</Column>
			</ColumnWrapper>
		</SectionContainer>
	);
};

export default ConfirmationView;
