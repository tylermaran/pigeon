import { useState } from 'react';
import { useUserContext } from '../../userContext';

import BaseContainer from '../../components/Containers';
import Header from '../../components/Header';
import PrimaryButton from '../../components/BaseUI/Buttons';
import SectionContainer from '../../components/Section';
import { InputContainer } from './styledComponents';

const DataSources = () => {
	const initialState = {
		DB_HOST: '',
		DB_NAME: '',
		DB_PASSWORD: '',
		DB_PORT: '',
		DB_USER: '',
	};
	const { user, setUser } = useUserContext();
	const [form, setForm] = useState(initialState);

	const handleInput = (e) => {
		const { name, value } = e.target;
		setForm((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = () => {
		setUser((prevState) => ({
			...prevState,
			sources: [...user.sources, form],
		}));
		setForm(initialState);
	};

	const existingSources = user.sources.map(({ DB_NAME, DB_USER }) => {
		return (
			<li key={DB_NAME}>
				{DB_NAME} - {DB_USER}
			</li>
		);
	});

	return (
		<BaseContainer>
			<Header title="Data Sources" />
			<SectionContainer>
				<h2>Existing Connections</h2>
				<ul>{existingSources}</ul>
				<h2>Add Connection</h2>
				<InputContainer>
					DB_HOST
					<input
						name="DB_HOST"
						value={form.DB_HOST}
						onChange={handleInput}
					/>
					DB_NAME
					<input
						name="DB_NAME"
						value={form.DB_NAME}
						onChange={handleInput}
					/>
					DB_PASSWORD
					<input
						name="DB_PASSWORD"
						value={form.DB_PASSWORD}
						onChange={handleInput}
					/>
					DB_PORT
					<input
						name="DB_PORT"
						value={form.DB_PORT}
						onChange={handleInput}
					/>
					DB_USER
					<input
						name="DB_USER"
						value={form.DB_USER}
						onChange={handleInput}
					/>
					<PrimaryButton onClick={handleSubmit}>Save</PrimaryButton>
				</InputContainer>
			</SectionContainer>
		</BaseContainer>
	);
};

export default DataSources;
