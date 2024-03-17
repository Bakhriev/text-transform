import { TbTextRecognition } from 'react-icons/tb';
import { CiDark, CiLight } from 'react-icons/ci';
import { useEffect, useState } from 'react';

export const Header = () => {
	const [theme, setTheme] = useState('');

	useEffect(() => {
		const currentTheme = localStorage.getItem('theme') ?? 'light';
		setTheme(currentTheme);

		document.body.classList.remove('dark');
		document.body.classList.remove('light');
		document.body.classList.add(currentTheme);
	}, [theme]);

	const toggleTheme = () => {
		if (theme === 'light') {
			setTheme('dark');
			localStorage.setItem('theme', 'dark');
			return;
		}
		if (theme === 'dark') {
			setTheme('light');
			localStorage.setItem('theme', 'light');
			return;
		}
	};

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
