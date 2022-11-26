import { PrimaryButton } from '../../components/BaseUI/Buttons';
import { InputContainer } from './styledComponents';

export const courierInput = ({ form, handleInput, handleSubmit }) => {
	return (
		<InputContainer>
			<h2>Courier (COMING SOON)</h2>
			<br></br>
			NICKNAME
			<input
				name="NICKNAME"
				value={form.NICKNAME}
				onChange={handleInput}
			/>
			API_KEY
			<input name="API_KEY" value={form.API_KEY} onChange={handleInput} />
			URL
			<input name="URL" value={form.URL} onChange={handleInput} />
			<br></br>
			<br></br>
			<br></br>
			<PrimaryButton disabled onClick={handleSubmit}>
				Save
			</PrimaryButton>
		</InputContainer>
	);
};
