import TemplateContainer from '../../../components/TemplateContainer';
import SectionContainer from '../../../components/Section';
import Tag from '../../../components/BaseUI/Tags';

import {
	Column,
	ColumnWrapper,
	StepNav,
	StyledButton,
	StyledSelect,
} from '../styledComponents';
import { SubTitle, TagWrapper } from './styledComponents';

const TemplateView = ({
	activeCampaign,
	providers,
	setStep,
	updateCampaign,
}) => {
	const { template } = activeCampaign;

	const setProvider = (i) => {
		updateCampaign('provider', providers[i]);
	};

	const emailProviders = providers.map((el, i) => {
		return (
			<option key={el.NICKNAME} value={i}>
				{el.TYPE}-{el.NICKNAME}
			</option>
		);
	});

	const templateArray = activeCampaign?.templateValues.map((el) => {
		return <Tag key={el} label={el} />;
	});

	const updateTemplate = ({ subject, body }) => {
		updateCampaign('template', {
			subject: subject ? subject : template.subject,
			body: body ? body : template.body,
		});
	};

	return (
		<SectionContainer>
			<ColumnWrapper>
				<Column>
					<StepNav>
						<StyledButton onClick={() => setStep(0)}>
							ᐊ Edit Query
						</StyledButton>
						<StyledButton onClick={() => setStep(2)}>
							Review ᐅ
						</StyledButton>
					</StepNav>
					<h2>Create email</h2>
					<div>
						<SubTitle>Email Provider</SubTitle>
						<StyledSelect
							name="source"
							onChange={(e) => setProvider(e.target.value)}
							defaultValue={'DEFAULT'}
						>
							<option value={'DEFAULT'} disabled hidden>
								Select Source
							</option>
							{emailProviders}
						</StyledSelect>
					</div>
					{!!templateArray.length && (
						<>
							<SubTitle>Fields:</SubTitle>
							<TagWrapper>{templateArray}</TagWrapper>
						</>
					)}
					<SubTitle>Template</SubTitle>

					<TemplateContainer
						template={template}
						updateTemplate={updateTemplate}
					/>
				</Column>
			</ColumnWrapper>
		</SectionContainer>
	);
};

export default TemplateView;
