import { useState } from 'react';
import { useUserContext } from '../../userContext';

import BaseContainer from '../../components/Containers';
import Header from '../../components/Header';
import SectionContainer from '../../components/Section';
import { SourceWrapper } from './styledComponents';
import SourceContainer from '../../components/SourceContainer';
import Modal from '../../components/BaseUI/Modal';

import { postgresInput } from './postgresInput';

const DataSources = () => {
	const initialState = {
		DB_HOST: '',
		DB_NAME: '',
		DB_PASSWORD: '',
		DB_PORT: '',
		DB_USER: '',
		NICKNAME: '',
		TYPE: '',
	};

	const { user, setUser } = useUserContext();
	const [open, setOpen] = useState(false);
	const [form, setForm] = useState(initialState);

	const handleModal = (source) => {
		if (open) {
			setOpen(false);
		} else {
			if (source === 'postgres') {
				setForm((prevState) => ({
					...prevState,
					TYPE: 'POSTGRES',
				}));
				setOpen(true);
			}
			if (source === 'mysql') {
				setForm((prevState) => ({
					...prevState,
					TYPE: 'MYSQL',
				}));
				setOpen(true);
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
		setOpen(false);
		setUser((prevState) => ({
			...prevState,
			sources: [...user.sources, form],
		}));
		setForm(initialState);
	};

	const existingSources = user.sources.map(({ TYPE, NICKNAME }) => {
		return (
			<SourceContainer
				key={`${TYPE}-${NICKNAME}`}
				image={'./postgres.png'}
				title={`${TYPE}-${NICKNAME}`}
				active={false}
				handleClick={() => handleModal('postgres')}
			/>
		);
	});

	return (
		<BaseContainer>
			<Modal
				open={open}
				setOpen={setOpen}
				propsToPassDown={{ form, handleInput, handleSubmit }}
				Component={postgresInput}
			/>

			<Header title="Data Sources" />
			<SectionContainer>
				{existingSources.length > 0 && <h2>Existing Connections</h2>}

				<div>{existingSources}</div>

				<h2>New Database Connection</h2>
				<SourceWrapper>
					<SourceContainer
						image={'./postgres.png'}
						title="PostgreSQL"
						active={false}
						handleClick={() => handleModal('postgres')}
					/>
					<SourceContainer
						image={'./mysql.png'}
						title="MySQL - Coming soon"
						active={false}
						handleClick={() => handleModal('mysql')}
					/>
				</SourceWrapper>
			</SectionContainer>
		</BaseContainer>
	);
};

export default DataSources;
