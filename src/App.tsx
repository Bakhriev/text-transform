import { Header } from './components/header';
import { Playground } from './components/playground';

import './assets/scss/main.scss';

export const App = () => {
	return (
		<div className='app'>
			<Header />
			<Playground />
		</div>
	);
};
