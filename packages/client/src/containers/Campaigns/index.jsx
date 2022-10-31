/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';

import BaseContainer from '../../components/Containers';
import Header from '../../components/Header';

import { stepDictionary } from './constants';
import { useUserContext } from '../../userContext';
import { runQuery } from './requests';

const Campaigns = () => {
	const active = 0;
	const [step, setStep] = useState(0);
	// const [queryData, setQueryData] = useState(null);
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

	const handleQuery = async () => {
		setQueryError('');
		// setQueryData('');
		updateCampaign('queryData', {
			result: [],
			rowCount: 0,
			templateValues: [],
		});
		if (activeCampaign.query === '') {
			return setQueryError('No query provided');
		}

		try {
			const { data = null, message } = await runQuery({
				campaign: activeCampaign,
			});

			if (message) {
				setQueryError(message);
			} else {
				const { result, rowCount, templateValues } = data;
				console.log(data);
				// updateCampaign('templateValues', templateValues);
				updateCampaign('queryData', data);
				// setQueryData({ result, rowCount });
			}
		} catch (error) {
			console.log(error);
			setQueryError(error);
		}
	};

	const ViewToRender = stepDictionary[step];

	return (
		<BaseContainer>
			<Header title="Campaigns" />
			<ViewToRender
				activeCampaign={activeCampaign}
				handleQuery={handleQuery}
				providers={providers}
				queryError={queryError}
				setStep={setStep}
				sources={sources}
				updateCampaign={updateCampaign}
			/>
		</BaseContainer>
	);
};

export default Campaigns;
