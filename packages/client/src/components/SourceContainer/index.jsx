import { SourceWrapper, Title, Icon } from './styledComponents';

const SourceContainer = ({ image, title, handleModal, active }) => {
	return (
		<SourceWrapper>
			<Icon src={image} />
			<Title>{title}</Title>
			{/* <Subtext selected={selected}>{subtext}</Subtext> */}
		</SourceWrapper>
	);
};

export default SourceContainer;
