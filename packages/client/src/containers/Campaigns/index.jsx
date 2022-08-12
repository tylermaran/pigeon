/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

import BaseContainer from '../../components/Containers';
import Header from '../../components/Header';

import { stepDictionary } from './constants';
import { useUserContext } from '../../userContext';
import { runQuery } from './requests';

const Campaigns = () => {
	const active = 0;
	const [step, setStep] = useState(0);
	const [queryData, setQueryData] = useState('');
	const [queryError, setQueryError] = useState('');

	const { user, setUser } = useUserContext();
	const { campaigns, sources, providers } = user;
	const activeCampaign = campaigns[active];

	const updateCampaign = (field, value) => {
		const draft = { ...activeCampaign, [field]: value };
		campaigns[active] = draft;
		setUser((prevState) => ({
			...prevState,
			campaigns: campaigns,
		}));
	};

	useEffect(() => {
		if (queryData && queryData.length) {
			updateCampaign('templateValues', Object.keys(queryData[0]));
		}
	}, [queryData]);

	const handleQuery = async () => {
		setQueryError('');
		setQueryData('');
		if (activeCampaign.query === '') {
			return setQueryError('No query provided');
		}
		const { data, message } = await runQuery({ campaign: activeCampaign });
		if (message) setQueryError(message);
		if (data) setQueryData(data);
	};

	const ViewToRender = stepDictionary[step];

	return (
		<BaseContainer>
			<Header title="Campaigns" />
			<ViewToRender
				activeCampaign={activeCampaign}
				handleQuery={handleQuery}
				providers={providers}
				queryData={queryData}
				queryError={queryError}
				setStep={setStep}
				sources={sources}
				updateCampaign={updateCampaign}
			/>
		</BaseContainer>
	);
};

export default Campaigns;
