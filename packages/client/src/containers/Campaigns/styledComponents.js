import styled from 'styled-components';

export const Column = styled.div`
	border-right: ${({ border }) => (border ? '0.2rem solid #f1f1f1' : 'none')};
	display: inline-flex;
	flex-direction: column;
	height: 100%;
	padding: ${({ border }) =>
		border ? '1rem 1rem 1rem 0' : '1rem 0 1rem 1rem'};

	width: 50%;
`;

export const ColumnWrapper = styled.div`
	display: flex;
	flex-direction: row;
`;

export const ErrorBanner = styled.div`
	color: red;
`;
