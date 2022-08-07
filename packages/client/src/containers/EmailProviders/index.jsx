import Header from '../../components/Header';
import BaseContainer from '../../components/Containers';
import SectionContainer from '../../components/Section';
import { InputContainer } from './styledComponents';

const EmailProviders = () => {
	return (
		<BaseContainer>
			<Header title="Email Providers" />
			<SectionContainer>
				<h2>Add Email Provider</h2>
				<InputContainer>
					URL
					<input />
					API_KEY
					<input />
					<button>Save</button>
				</InputContainer>
			</SectionContainer>
		</BaseContainer>
	);
};

export default EmailProviders;
