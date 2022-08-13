import { StyledButton } from './styledComponents';

export const PrimaryButton = ({ onClick, children, ...restProps }) => {
	return (
		<StyledButton type="button" onClick={onClick} {...restProps}>
			{children}
		</StyledButton>
	);
};

export const SecondaryButton = ({ onClick, children, ...restProps }) => {
	return (
		<StyledButton type="button" onClick={onClick} {...restProps}>
			{children}
		</StyledButton>
	);
};
