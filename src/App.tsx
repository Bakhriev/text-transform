import { useLocalStorage } from 'usehooks-ts';

import { Header } from './components/header';
import { Playground } from './components/playground';

import './assets/scss/main.scss';

export const App = () => {
	const [theme, setTheme] = useLocalStorage('theme');

	const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
	};

	return (
		<div className={`app ${theme}`}>
			<Header theme={theme} toggleTheme={toggleTheme} />
			<Playground />
		</div>
	);
};
