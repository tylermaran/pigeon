import Modal from '@mui/material/Modal';

import { StyledModal, StyledInterior } from './styledComponents';

const BaseModal = ({ open, setOpen, propsToPassDown, Component }) => {
	return (
		<Modal
			open={open}
			onClose={() => setOpen(false)}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<StyledModal>
				<StyledInterior>
					{propsToPassDown && <Component {...propsToPassDown} />}
				</StyledInterior>
			</StyledModal>
		</Modal>
	);
};

export default BaseModal;
