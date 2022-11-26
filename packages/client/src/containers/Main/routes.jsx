import { Route, Routes } from 'react-router-dom';

import Campaigns from '../Campaigns';
import DataSources from '../DataSources';
import EmailProviders from '../EmailProviders';
import Dashboard from '../Dashboard';

// prettier-ignore
const routes = () => (
	<Routes>
		<Route path="/" element={<Dashboard/>} />
		<Route path="/campaigns" element={<Campaigns/>} />
		<Route path="/data-sources" element={<DataSources/>}/>
		<Route path="/email-providers" element={<EmailProviders/>} />
	</Routes>
);

export default routes;
