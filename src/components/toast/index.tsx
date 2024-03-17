import { IoCheckmark } from 'react-icons/io5';

interface IToast {
	isActive: boolean;
}

export const Toast: React.FC<IToast> = ({ isActive }) => {
	return (
		<div className={`toast ${isActive ? 'active' : ''}`}>
			<div className='toast-content'>Copied to clipboard</div>
			<IoCheckmark size='20' />
		</div>
	);
};
