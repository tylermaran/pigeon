import { StyledTag } from './styledComponents';

const Tag = ({ label, ...restProps }) => {
	return <StyledTag {...restProps}>{label}</StyledTag>;
};

export default Tag;
