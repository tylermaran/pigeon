import { NavItem, Title } from './styledComponents';

const SideNavItem = ({ title, subtext, selected, to }) => {
	return (
		<NavItem to={to} selected={selected}>
			<Title selected={selected}>{title}</Title>
		</NavItem>
	);
};

export default SideNavItem;
