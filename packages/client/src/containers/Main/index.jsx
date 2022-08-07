import { Layout, Container, SideBar } from './styledComponents';
import SideNavItem from '../../components/SideNavItem';
import Pigeon from '../../components/Pigeon';
import { useLocation } from 'react-router-dom';

import Routes from './routes';

const App = () => {
	const { pathname } = useLocation();

	return (
		<Layout>
			<SideBar>
				<Pigeon />
				<SideNavItem
					title="Campaigns"
					subtext="Create an email campaign"
					selected={pathname === '/campaigns'}
					to={'/campaigns'}
				/>
				<SideNavItem
					title="Data Sources"
					shortName="data"
					subtext="Manage database connections"
					selected={pathname === '/data-sources'}
					to={'/data-sources'}
				/>
				<SideNavItem
					title="Email Providers"
					shortName="email"
					subtext="Manage email providers"
					selected={pathname === '/email-providers'}
					to={'/email-providers'}
				/>
			</SideBar>
			<Container>
				<Routes />
			</Container>
		</Layout>
	);
};

export default App;
