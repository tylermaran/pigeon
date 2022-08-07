import { useState } from 'react';

import Header from '../../components/Header';
import BaseContainer from '../../components/Containers';
import SectionContainer from '../../components/Section';
import QueryContainer from '../../components/QueryContainer';
import TemplateContainer from '../../components/TemplateContainer';
import QueryTable from '../../components/QueryTable';

// requests
import { runQuery } from './requests';

import { Column, ColumnWrapper, ErrorBanner } from './styledComponents';
const Campaigns = () => {
	const [query, setQuery] = useState('');
	const [data, setData] = useState('');
	const [error, setError] = useState('');

	const handleSubmit = async () => {
		setError('');
		setData('');
		const { data, message } = await runQuery({ query });
		if (message) setError(message);
		if (data) setData(data);
	};

	return (
		<BaseContainer>
			<Header title="Campaigns" />
			<SectionContainer>
				<h2>Send Email</h2>
				<ColumnWrapper>
					<Column border>
						<div>
							Data Source
							<select name="source" id="">
								<option>rysolv_local</option>
								<option>rysolv_prod</option>
							</select>
						</div>
						<div>
							Query
							<QueryContainer
								query={query}
								setQuery={setQuery}
								handleSubmit={handleSubmit}
							/>
							<button onClick={handleSubmit}>Run query</button>
						</div>
						<QueryTable data={data} />
						<ErrorBanner>{error}</ErrorBanner>
					</Column>
					<Column>
						<div>
							Email Provider
							<select name="source" id="">
								<option>postmark</option>
								<option>courier</option>
							</select>
						</div>
						<div>
							Template
							<TemplateContainer />
							<button>Send</button>
						</div>
					</Column>
				</ColumnWrapper>
			</SectionContainer>
		</BaseContainer>
	);
};

export default Campaigns;
