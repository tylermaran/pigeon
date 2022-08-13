import { useState } from 'react';
import { useUserContext } from '../../userContext';

import BaseContainer from '../../components/Containers';
import Header from '../../components/Header';
import { PrimaryButton } from '../../components/BaseUI/Buttons';
import SectionContainer from '../../components/Section';

import { InputContainer } from './styledComponents';

const EmailProviders = () => {
	const initialState = {
		NICKNAME: '',
		API_KEY: '',
		URL: '',
		TYPE: 'POSTMARK',
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
			providers: [...user.providers, form],
		}));
		setForm(initialState);
	};

	const existingProviders = user.providers.map(({ NICKNAME, TYPE }) => {
		return (
			<li key={NICKNAME}>
				{TYPE} - {NICKNAME}
			</li>
		);
	});

	return (
		<BaseContainer>
			<Header title="Email Providers" />
			<SectionContainer>
				<h2>Existing Providers</h2>
				<ul>{existingProviders}</ul>
				<h2>Add Provider</h2>
				<InputContainer>
					NICKNAME
					<input
						name="NICKNAME"
						value={form.NICKNAME}
						onChange={handleInput}
					/>
					API_KEY
					<input
						name="API_KEY"
						value={form.API_KEY}
						onChange={handleInput}
					/>
					URL
					<input name="URL" value={form.URL} onChange={handleInput} />
					<PrimaryButton onClick={handleSubmit}>Save</PrimaryButton>
				</InputContainer>
			</SectionContainer>
		</BaseContainer>
	);
};

export default EmailProviders;
