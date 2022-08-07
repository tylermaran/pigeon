import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavItem = styled(Link)`
	border-bottom: 0.1rem solid #3c263c;
	padding: 1rem;
	display: flex;
	flex-direction: column;

	:hover {
		background: #260045;
		cursor: pointer;
	}
`;

export const Title = styled.div`
	font-size: 1.2rem;
	margin-bottom: 0.25rem;
	color: ${({ selected }) => (selected ? '#ffb900' : '#ffffff')};
`;

export const Subtext = styled.div`
	font-size: 1rem;
	color: ${({ selected }) => (selected ? '#ffb900' : '#dddddd')};
`;
