import styled from 'styled-components';

export const PigeonLogo = styled.div`
	font-size: 4rem;
	user-select: none;
	:hover {
		cursor: pointer;
		-moz-transform: scale(-1, 1);
		-webkit-transform: scale(-1, 1);
		-o-transform: scale(-1, 1);
		-ms-transform: scale(-1, 1);
		transform: scale(-1, 1);
	}
`;

export const HomeContainer = styled.div`
	align-items: center;
	border-bottom: 0.2rem solid #3c263c;
	display: flex;
	flex-direction: column;
	font-weight: 400;
	justify-content: center;
	min-height: 160px;
`;

export const Title = styled.div`
	font-size: 2rem;
	color: #ffffff;

	:hover {
		cursor: pointer;
	}
`;
