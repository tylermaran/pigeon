import { useState } from 'react';
import { useUserContext } from '../../userContext';

import BaseContainer from '../../components/Containers';
import Header from '../../components/Header';
import { PrimaryButton } from '../../components/BaseUI/Buttons';
import SectionContainer from '../../components/Section';

import { InputContainer, ProviderOptions } from './styledComponents';
import SourceContainer from '../../components/SourceContainer';
import Modal from '../../components/BaseUI/Modal';

const EmailProviders = () => {
	const initialState = {
		NICKNAME: '',
		API_KEY: '',
		URL: '',
		TYPE: '',
	};
	const { user, setUser } = useUserContext();
	const [modalContent, setModalContent] = useState(null);
	const [open, setOpen] = useState(false);
	const [form, setForm] = useState(initialState);

	const handleModal = (source) => {
		if (open) {
			setOpen(false);
		} else {
			if (source === 'postmark') {
				setForm((prevState) => ({
					...prevState,
					TYPE: 'POSTMARK',
				}));
				setModalContent(postmarkInput);
			}
			if (source === 'courier') {
				setForm((prevState) => ({
					...prevState,
					TYPE: 'COURIER',
				}));
				setModalContent(courierInput);
			}
			setOpen(true);
		}
	};

	const handleInput = (e) => {
		const { name, value } = e.target;
		setForm((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = () => {
		setOpen(false);
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

	const postmarkInput = (
		<InputContainer>
			<h2>Postmark</h2>
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
			<PrimaryButton onClick={handleSubmit}>Save</PrimaryButton>
		</InputContainer>
	);

	const courierInput = (
		<InputContainer>
			<h2>Courier</h2>
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
			<PrimaryButton onClick={handleSubmit}>Save</PrimaryButton>
		</InputContainer>
	);

	return (
		<BaseContainer>
			<Header title="Email Providers" />
			<SectionContainer>
				<h2>Existing Providers</h2>

				<Modal open={open} setOpen={setOpen}>
					{modalContent}
				</Modal>

				<ul>{existingProviders}</ul>
				<h2>Add Provider</h2>
				<ProviderOptions>
					<SourceContainer
						image={'./postmark.png'}
						title="Postmark"
						active={false}
						handleModal={() => handleModal('postmark')}
					/>
					<SourceContainer
						image={'./courier.png'}
						title="Courier"
						active={false}
						handleModal={() => handleModal('courier')}
					/>
				</ProviderOptions>
			</SectionContainer>
		</BaseContainer>
	);
};

export default EmailProviders;
