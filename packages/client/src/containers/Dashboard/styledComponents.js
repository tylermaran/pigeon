import styled from 'styled-components';

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	max-width: 60rem;
	width: 100%;
	font-weight: 400;
`;

export const ColumnWrapper = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
`;

export const SubHeader = styled.h2`
	color: #7d38b4;
	font-size: 2rem;
	margin: 1rem 0;
`;

export const StyledUl = styled.ul`
	list-style-type: none; /* Remove bullets */
	padding: 0;
	margin: 0;

	li {
		margin: 0.5rem 0;
	}
`;

export const StyledLink = styled.a`
	color: blue;
`;
