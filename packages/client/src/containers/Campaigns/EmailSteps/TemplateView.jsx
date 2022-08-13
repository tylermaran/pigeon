import { PrimaryButton } from '../../../components/BaseUI/Buttons';
import TemplateContainer from '../../../components/TemplateContainer';
import SectionContainer from '../../../components/Section';
import { Column, ColumnWrapper, StyledSelect } from '../styledComponents';

const TemplateView = ({ activeCampaign, updateCampaign, providers }) => {
	const setProvider = (i) => {
		updateCampaign('provider', providers[i]);
	};

	const providerSources = providers.map((el, i) => {
		return (
			<option value={i}>
				{el.TYPE}-{el.NICKNAME}
			</option>
		);
	});

	return (
		<SectionContainer>
			<h2>Create email</h2>
			<ColumnWrapper>
				<Column border>
					<div>
						Email Provider
						<StyledSelect
							name="source"
							onChange={(e) => setProvider(e.target.value)}
						>
							<option value="" selected disabled hidden>
								Select Provider
							</option>
							{providerSources}
						</StyledSelect>
					</div>
					<div>
						Template
						<TemplateContainer />
						<PrimaryButton>Send</PrimaryButton>
					</div>
				</Column>
			</ColumnWrapper>
		</SectionContainer>
	);
};

export default TemplateView;
