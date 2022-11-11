import { SourceWrapper, Title, Icon } from './styledComponents';

const SourceContainer = ({ image, title, handleClick, active }) => {
	return (
		<SourceWrapper onClick={handleClick} active={active}>
			<Icon src={image} />
			<Title>{title}</Title>
			{/* <Subtext selected={selected}>{subtext}</Subtext> */}
		</SourceWrapper>
	);
};

export default SourceContainer;
