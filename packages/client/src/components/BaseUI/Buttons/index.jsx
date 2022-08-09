import { StyledButton } from './styledComponents';

const PrimaryButton = ({ onClick, children, ...restProps }) => {
	console.log(onClick);
	return (
		<StyledButton type="button" onClick={onClick} {...restProps}>
			{children}
		</StyledButton>
	);
};

export default PrimaryButton;
