import TemplateContainer from '../../../components/TemplateContainer';
import SectionContainer from '../../../components/Section';
import SourceContainer from '../../../components/SourceContainer';
import Tag from '../../../components/BaseUI/Tags';

import {
	Column,
	ColumnWrapper,
	StepNav,
	StyledButton,
	SourceSelect,
	StyledLink,
} from '../styledComponents';
import { SubTitle, TagWrapper } from './styledComponents';

const TemplateView = ({
	activeCampaign,
	providers,
	setStep,
	updateCampaign,
}) => {
	const { template, queryData } = activeCampaign;

	const setProvider = (i) => {
		updateCampaign('provider', providers[i]);
	};

	const emailProviders = providers.map(({ TYPE, NICKNAME }, i) => {
		return (
			<SourceContainer
				key={`${TYPE}-${NICKNAME}`}
				image={'./postmark.png'}
				title={`${TYPE}-${NICKNAME}`}
				active={
					activeCampaign.provider &&
					NICKNAME === activeCampaign.provider.NICKNAME
				}
				handleClick={() => setProvider(i)}
			/>
		);
	});

	const templateArray = queryData?.templateValues.map((el) => {
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
							Preview & Send ᐅ
						</StyledButton>
					</StepNav>
					<h2>Create email</h2>
					<div>
						<SubTitle>Email Provider</SubTitle>
						<SourceSelect>
							{emailProviders.length ? (
								emailProviders
							) : (
								<StyledLink to="/email-providers">
									Add an email provider
								</StyledLink>
							)}
						</SourceSelect>
					</div>

					<SubTitle>Template</SubTitle>

					<TemplateContainer
						template={template}
						updateTemplate={updateTemplate}
					/>
					{!!templateArray.length && (
						<>
							<SubTitle>Available fields:</SubTitle>
							<TagWrapper>{templateArray}</TagWrapper>
						</>
					)}
				</Column>
			</ColumnWrapper>
		</SectionContainer>
	);
};

export default TemplateView;
