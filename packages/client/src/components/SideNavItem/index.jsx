import { NavItem, Title, Subtext } from './styledComponents';

const SideNavItem = ({ title, subtext, selected, to }) => {
	return (
		<NavItem to={to} selected={selected}>
			<Title selected={selected}>{title}</Title>
			{/* <Subtext selected={selected}>{subtext}</Subtext> */}
		</NavItem>
	);
};

export default SideNavItem;
