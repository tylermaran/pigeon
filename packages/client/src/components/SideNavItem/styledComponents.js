import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavItem = styled(Link)`
	border-bottom: 0.1rem solid #3c263c;
	display: flex;
	flex-direction: column;
	padding: 1rem;

	:hover {
		background: #260045;
		cursor: pointer;
	}
`;

export const Title = styled.div`
	color: ${({ selected }) => (selected ? '#ffb900' : '#ffffff')};
	font-size: 1.1rem;
	margin-bottom: 0.25rem;
`;

export const Subtext = styled.div`
	color: ${({ selected }) => (selected ? '#ffb900' : '#dddddd')};
	font-size: 0.9rem;
`;
