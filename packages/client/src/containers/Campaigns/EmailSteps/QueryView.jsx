import { PrimaryButton } from '../../../components/BaseUI/Buttons';
import QueryContainer from '../../../components/QueryContainer';
import QueryTable from '../../../components/QueryTable';
import SectionContainer from '../../../components/Section';
import Tag from '../../../components/BaseUI/Tags';
import SourceContainer from '../../../components/SourceContainer';

import {
	Column,
	ColumnWrapper,
	ErrorBanner,
	StepNav,
	StyledButton,
	SourceSelect,
	StyledLink,
} from '../styledComponents';
import {
	DataWrapper,
	QueryWrapper,
	SubTitle,
	TagWrapper,
} from './styledComponents';

const QueryView = ({
	activeCampaign,
	handleQuery,
	queryError,
	setStep,
	sources,
	updateCampaign,
}) => {
	const { queryData } = activeCampaign;
	const setSource = (i) => {
		updateCampaign('source', sources[i]);
	};

	const existingSources = sources.map(({ TYPE, NICKNAME }, i) => {
		return (
			<SourceContainer
				key={`${TYPE}-${NICKNAME}`}
				image={'./postgres.png'}
				title={`${TYPE}-${NICKNAME}`}
				active={
					activeCampaign.source &&
					NICKNAME === activeCampaign.source.NICKNAME
				}
				handleClick={() => setSource(i)}
			/>
		);
	});

	const templateArray = queryData?.templateValues.map((el) => {
		return <Tag key={el} label={el} />;
	});

	return (
		<SectionContainer>
			<ColumnWrapper>
				<Column>
					<StepNav>
						<StyledButton disabled>ᐊ Back</StyledButton>
						<StyledButton
							disabled={queryData.templateValues?.length < 1}
							onClick={() => setStep(1)}
						>
							Template ᐅ
						</StyledButton>
					</StepNav>
					<h2>Query Data</h2>
					<div>
						<SubTitle>Data Source</SubTitle>

						<SourceSelect>
							{existingSources.length ? (
								existingSources
							) : (
								<StyledLink to="/data-sources">
									Add a data source
								</StyledLink>
							)}
						</SourceSelect>
					</div>
					<QueryWrapper>
						<SubTitle>Query</SubTitle>
						<QueryContainer
							query={activeCampaign.query}
							setQuery={(e) => updateCampaign('query', e)}
							handleQuery={handleQuery}
						/>
						<PrimaryButton onClick={handleQuery}>
							Run query (
							<span
								style={{
									lineHeight: '1rem',
									fontSize: '.75rem',
								}}
							>
								⌘
							</span>
							<span
								style={{
									verticalAlign: 'middle',
									lineHeight: '1rem',
									fontSize: '1.5rem',
								}}
							>
								↵
							</span>
							)
						</PrimaryButton>
					</QueryWrapper>

					{!!templateArray.length && (
						<>
							<SubTitle>Available fields:</SubTitle>
							<TagWrapper>{templateArray}</TagWrapper>
						</>
					)}

					{queryData && (
						<DataWrapper>
							<QueryTable data={queryData} />
						</DataWrapper>
					)}
					<ErrorBanner>{queryError}</ErrorBanner>
				</Column>
			</ColumnWrapper>
		</SectionContainer>
	);
};

export default QueryView;
