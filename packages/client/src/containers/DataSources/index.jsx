import { useState } from 'react';
import { useUserContext } from '../../userContext';

import BaseContainer from '../../components/Containers';
import Header from '../../components/Header';
import { PrimaryButton } from '../../components/BaseUI/Buttons';
import SectionContainer from '../../components/Section';
import { InputContainer, SourceWrapper } from './styledComponents';
import SourceContainer from '../../components/SourceContainer';

const DataSources = () => {
	const initialState = {
		NICKNAME: '',
		DB_HOST: '',
		DB_NAME: '',
		DB_PASSWORD: '',
		DB_PORT: '',
		DB_USER: '',
		TYPE: 'POSTGRES',
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

	const handleDelete = (nickname) => {
		const index = user.sources.findIndex((el) => el.NICKNAME === nickname);
		setUser((prevState) => ({
			...prevState,
			sources: user.sources.splice(index, 1),
		}));
	};

	const existingSources = user.sources.map(({ TYPE, NICKNAME }) => {
		return (
			<li key={NICKNAME}>
				{TYPE} - {NICKNAME}
				<button
					value={NICKNAME}
					onClick={(el) => handleDelete(el.target.value)}
				>
					Delete
				</button>
			</li>
		);
	});

	return (
		<BaseContainer>
			<Header title="Data Sources" />
			<SectionContainer>
				<h2>Existing Connections</h2>

				<ul>{existingSources}</ul>

				<h3>New Postgres Connection:</h3>
				<SourceWrapper>
					<SourceContainer
						image={'./postgres.png'}
						title="PostgreSQL"
						active={false}
					/>
					<SourceContainer
						image={'./mysql.png'}
						title="MySQL"
						active={false}
					/>
				</SourceWrapper>
				<InputContainer>
					NICKNAME
					<input
						name="NICKNAME"
						value={form.NICKNAME}
						onChange={handleInput}
					/>
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
