import styled from 'styled-components';

export const QueryWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const DataWrapper = styled.div`
	border-bottom: 2px solid purple;
	border-top: 2px solid purple;
	display: flex;
	flex-direction: column;
	margin-top: 3rem;
	max-height: 30rem;
	overflow: hidden;
`;

export const TagWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

export const SubTitle = styled.div`
	font-size: 1rem;
	color: #323232;
	font-weight: bold;
	margin: 1rem 0 0.25rem 0;
`;
