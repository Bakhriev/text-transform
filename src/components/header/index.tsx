import { TbTextRecognition } from 'react-icons/tb';
import { CiDark, CiLight } from 'react-icons/ci';

export const Header = ({ theme, toggleTheme }) => {
	return (
		<div className='header'>
			<div className='header__container container'>
				<TbTextRecognition size={50} />
				<button onClick={toggleTheme} className='theme-toggle btn-reset'>
					{theme === 'light' ? <CiLight size='30' /> : <CiDark size='30' />}
				</button>
			</div>
		</div>
	);
};
