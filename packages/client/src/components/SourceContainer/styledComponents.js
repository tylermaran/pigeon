import styled from 'styled-components';

export const SourceWrapper = styled.div`
	border: 0.1rem solid #d5d5d5;
	display: flex;
	padding: 0.5rem 2rem 0.5rem 0.5rem;
	width: fit-content;
	align-items: center;
	border-radius: 0.25rem;
	margin: 1rem;

	:hover {
		cursor: pointer;
		border: 0.1rem solid #a7a7a7;
	}
`;

export const Title = styled.div`
	font-size: 1rem;
	font-weight: 400;
	margin-left: 0.5rem;
`;

export const Icon = styled.img`
	height: 1.5rem;
	width: 1.5rem;
`;
