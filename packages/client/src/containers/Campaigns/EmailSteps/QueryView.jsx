import PrimaryButton from '../../../components/BaseUI/Buttons';
import QueryContainer from '../../../components/QueryContainer';
import QueryTable from '../../../components/QueryTable';
import SectionContainer from '../../../components/Section';
import {
	Column,
	ColumnWrapper,
	ErrorBanner,
	StyledSelect,
} from '../styledComponents';

import { DataWrapper, QueryWrapper } from './styledComponents';

const QueryView = ({
	activeCampaign,
	handleQuery,
	queryData,
	queryError,
	sources,
	updateCampaign,
}) => {
	console.log(activeCampaign);

	const setSource = (i) => {
		updateCampaign('source', sources[i]);
	};

	const emailSources = sources.map((el, i) => {
		return (
			<option value={i}>
				{el.TYPE}-{el.NICKNAME}
			</option>
		);
	});

	return (
		<SectionContainer>
			<ColumnWrapper>
				<h2>Query Data</h2>

				<Column>
					<div>
						Data Source
						<StyledSelect
							name="source"
							onChange={(e) => setSource(e.target.value)}
						>
							<option value="" selected disabled hidden>
								Select Source
							</option>
							{emailSources}
						</StyledSelect>
					</div>
					<QueryWrapper>
						Query
						<QueryContainer
							query={activeCampaign.query}
							setQuery={(e) => updateCampaign('query', e)}
							handleQuery={handleQuery}
						/>
						<PrimaryButton onClick={handleQuery}>
							Run query
						</PrimaryButton>
					</QueryWrapper>
					<DataWrapper>
						<QueryTable data={queryData} />
					</DataWrapper>
					<ErrorBanner>{queryError}</ErrorBanner>
				</Column>
			</ColumnWrapper>
		</SectionContainer>
	);
};

export default QueryView;
