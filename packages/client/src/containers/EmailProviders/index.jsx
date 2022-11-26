import { useState } from 'react';
import { useUserContext } from '../../userContext';

import { postmarkInput } from './postmarkInput';
import { courierInput } from './courierInput';
import BaseContainer from '../../components/Containers';
import Header from '../../components/Header';
import Modal from '../../components/BaseUI/Modal';
import SectionContainer from '../../components/Section';
import SourceContainer from '../../components/SourceContainer';

import { ProviderOptions } from './styledComponents';

const EmailProviders = () => {
	const initialState = {
		NICKNAME: '',
		API_KEY: '',
		URL: '',
		TYPE: '',
		FROM_EMAIL: '',
	};
	const { user, setUser } = useUserContext();
	const [postmarkOpen, setPostmarkOpen] = useState(false);
	const [courierOpen, setCourierOpen] = useState(false);
	const [form, setForm] = useState(initialState);

	const handleModal = (source) => {
		if (postmarkOpen || courierOpen) {
			setPostmarkOpen(false);
			setCourierOpen(false);
		} else {
			if (source === 'POSTMARK') {
				setForm((prevState) => ({
					...prevState,
					TYPE: 'POSTMARK',
				}));
				setPostmarkOpen(true);
			}
			if (source === 'COURIER') {
				setForm((prevState) => ({
					...prevState,
					TYPE: 'COURIER',
				}));
				setCourierOpen(true);
			}
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
		setCourierOpen(false);
		setPostmarkOpen(false);
		setUser((prevState) => ({
			...prevState,
			providers: [...user.providers, form],
		}));
		setForm(initialState);
	};

	const existingProviders = user.providers.map(({ NICKNAME, TYPE }) => {
		return (
			<SourceContainer
				key={`${TYPE}-${NICKNAME}`}
				image={TYPE === 'COURIER' ? './courier.png' : './postmark.png'}
				title={`${TYPE}-${NICKNAME}`}
				active={false}
				handleClick={() => handleModal(TYPE)}
			/>
		);
	});

	return (
		<BaseContainer>
			<Modal
				open={postmarkOpen}
				setOpen={setPostmarkOpen}
				propsToPassDown={{ form, handleInput, handleSubmit }}
				Component={postmarkInput}
			/>
			<Modal
				open={courierOpen}
				setOpen={setCourierOpen}
				propsToPassDown={{ form, handleInput, handleSubmit }}
				Component={courierInput}
			/>
			<Header title="Email Providers" />
			<SectionContainer>
				{existingProviders.length > 0 && <h2>Existing Providers</h2>}

				<div>{existingProviders}</div>
				<h2>Add Provider</h2>
				<ProviderOptions>
					<SourceContainer
						image={'./postmark.png'}
						title="Postmark"
						active={false}
						handleClick={() => handleModal('POSTMARK')}
					/>
					<SourceContainer
						image={'./courier.png'}
						title="Courier - Coming soon"
						active={false}
						handleClick={() => handleModal('COURIER')}
					/>
				</ProviderOptions>
			</SectionContainer>
		</BaseContainer>
	);
};

export default EmailProviders;
