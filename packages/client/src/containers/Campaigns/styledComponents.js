import styled from 'styled-components';

export const Column = styled.div`
	display: inline-flex;
	flex-direction: column;
	width: 50%;
	border-right: ${({ border }) => (border ? '.2rem solid grey' : 'none')};
	height: 100%;
	padding: 1rem 2rem;
`;

export const ColumnWrapper = styled.div`
	display: flex;
	flex-direction: row;
`;

export const ErrorBanner = styled.div`
	color: red;
`;
