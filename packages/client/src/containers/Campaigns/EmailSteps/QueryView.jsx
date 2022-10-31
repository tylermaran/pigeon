import { PrimaryButton } from '../../../components/BaseUI/Buttons';
import QueryContainer from '../../../components/QueryContainer';
import QueryTable from '../../../components/QueryTable';
import SectionContainer from '../../../components/Section';
import Tag from '../../../components/BaseUI/Tags';

import {
	Column,
	ColumnWrapper,
	ErrorBanner,
	StepNav,
	StyledButton,
	StyledSelect,
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

	const emailSources = sources.map((el, i) => {
		return (
			<option key={el.NICKNAME} value={i}>
				{el.TYPE}-{el.NICKNAME}
			</option>
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
						<StyledSelect
							name="source"
							onChange={(e) => setSource(e.target.value)}
							defaultValue={'DEFAULT'}
						>
							<option value={'DEFAULT'} disabled hidden>
								Select Source
							</option>
							{emailSources}
						</StyledSelect>
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
