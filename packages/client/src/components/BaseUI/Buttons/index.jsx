import { StyledButton } from './styledComponents';

const PrimaryButton = ({ onClick, children, ...restProps }) => {
	return (
		<StyledButton type="button" onClick={onClick} {...restProps}>
			{children}
		</StyledButton>
	);
};

export default PrimaryButton;
