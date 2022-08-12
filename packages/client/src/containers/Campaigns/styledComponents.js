import styled from 'styled-components';

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	max-width: 60rem;
	width: 100%;
`;

export const ColumnWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ErrorBanner = styled.div`
	color: red;
`;

export const StyledSelect = styled.select`
	border-radius: 0.25rem;
	border: 0.1rem solid #cbcbcb;
	font-family: 'Inter var', sans-serif;
	font-weight: 400;
	padding: 0.25rem 3rem;
`;
