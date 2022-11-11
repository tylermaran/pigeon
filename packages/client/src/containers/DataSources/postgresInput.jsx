import { PrimaryButton } from '../../components/BaseUI/Buttons';
import { InputContainer } from './styledComponents';

export const postgresInput = ({ form, handleInput, handleSubmit }) => {
	return (
		<InputContainer>
			<h2>Postgres</h2>
			<br></br>
			NICKNAME
			<input
				name="NICKNAME"
				onChange={handleInput}
				value={form.NICKNAME}
			/>
			DB_HOST
			<input name="DB_HOST" value={form.DB_HOST} onChange={handleInput} />
			DB_NAME
			<input name="DB_NAME" value={form.DB_NAME} onChange={handleInput} />
			DB_PASSWORD
			<input
				name="DB_PASSWORD"
				onChange={handleInput}
				value={form.DB_PASSWORD}
			/>
			DB_PORT
			<input name="DB_PORT" value={form.DB_PORT} onChange={handleInput} />
			DB_USER
			<input name="DB_USER" value={form.DB_USER} onChange={handleInput} />
			<br></br>
			<br></br>
			<br></br>
			<PrimaryButton onClick={handleSubmit}>Save</PrimaryButton>
		</InputContainer>
	);
};
