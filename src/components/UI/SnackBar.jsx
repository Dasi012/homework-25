import { Alert, Snackbar } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

export const SnackBar = ({ handleClose }) => {
	const { severity, message, open } = useSelector((state) => state.snackbar);

	return (
		<div>
			<Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
				<Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
					{message}
				</Alert>
			</Snackbar>
		</div>
	);
};
