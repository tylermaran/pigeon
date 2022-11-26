import styled from 'styled-components';

export const StyledButton = styled.button`
	background-color: ${({ disabled }) => (disabled ? 'grey' : '#420076')};
	border-radius: 0.25rem;
	border: none;
	color: white;
	padding: 0.5rem 2rem;
	font-size: 1.2rem;

	:hover {
		cursor: ${({ disabled }) => (disabled ? 'inherit' : 'pointer')};
	}
	:active {
		background-color: ${({ disabled }) =>
			disabled ? 'grey' : '#420076ed'};
	}
`;
