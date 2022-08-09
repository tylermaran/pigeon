import { useState } from 'react';

import BaseContainer from '../../components/Containers';
import Header from '../../components/Header';
import PrimaryButton from '../../components/BaseUI/Buttons';
import QueryContainer from '../../components/QueryContainer';
import QueryTable from '../../components/QueryTable';
import SectionContainer from '../../components/Section';
import TemplateContainer from '../../components/TemplateContainer';
import { Column, ColumnWrapper, ErrorBanner } from './styledComponents';

import { useUserContext } from '../../userContext';
import { runQuery } from './requests';

const Campaigns = () => {
	const [query, setQuery] = useState('');
	const [data, setData] = useState('');
	const [error, setError] = useState('');

	const { user, setUser } = useUserContext();

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
							<PrimaryButton onClick={handleSubmit}>
								Run query
							</PrimaryButton>
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
							<PrimaryButton>Send</PrimaryButton>
						</div>
					</Column>
				</ColumnWrapper>
			</SectionContainer>
		</BaseContainer>
	);
};

export default Campaigns;
