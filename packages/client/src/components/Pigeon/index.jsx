import { PigeonLogo, Title, HomeContainer } from './styledComponents';
import { useNavigate } from 'react-router-dom';

const Pigeon = () => {
	const navigate = useNavigate();
	return (
		<HomeContainer onClick={() => navigate('/')}>
			<PigeonLogo src="./logo.png" />
			<Title>✉ Pigeon</Title>
		</HomeContainer>
	);
};

export default Pigeon;
