import { PrimaryButton } from '../../components/BaseUI/Buttons';
import { InputContainer } from './styledComponents';

export const mySqlInput = ({ handleEmail }) => {
	return (
		<InputContainer>
			<h2>MySQL</h2>
			<br></br>
			Still working on the MySQL integration. Drop your email and we'll
			follow up when it's live.
			<br></br>
			<br></br>
			Email
			<input name="EMAIL" />
			<br></br>
			<br></br>
			<PrimaryButton onClick={handleEmail}>
				Ping me when it's done!
			</PrimaryButton>
		</InputContainer>
	);
};
