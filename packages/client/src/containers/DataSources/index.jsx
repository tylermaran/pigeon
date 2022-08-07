import Header from '../../components/Header';
import BaseContainer from '../../components/Containers';
import SectionContainer from '../../components/Section';
import { InputContainer } from './styledComponents';

const DataSources = () => {
	return (
		<BaseContainer>
			<Header title="Data Sources" />
			<SectionContainer>
				<h2>Add Connection</h2>
				<InputContainer>
					DB_HOST
					<input />
					DB_NAME
					<input />
					DB_PASSWORD
					<input />
					DB_PORT
					<input />
					DB_USER
					<input />
					<button>Save</button>
				</InputContainer>
			</SectionContainer>
		</BaseContainer>
	);
};

export default DataSources;
