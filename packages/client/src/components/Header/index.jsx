import { HeaderContainer, SectionTitle } from './styledComponents';

const Header = ({ title }) => {
	return (
		<HeaderContainer>
			<SectionTitle>{title}</SectionTitle>
		</HeaderContainer>
	);
};

export default Header;
