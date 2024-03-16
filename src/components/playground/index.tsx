import { useEffect, useState } from 'react';

export const Playground = () => {
	const [inputText, setInputText] = useState('');
	const [outputText, setOutputText] = useState('');
	const [currentFilter, setCurrentFilter] = useState('lowercase');

	useEffect(() => {
		const filterAndTransfer = () => {
			if (currentFilter === '') setOutputText(inputText);

			if (currentFilter === 'lowercase') {
				setOutputText(inputText.toLowerCase());
			}
			if (currentFilter === 'uppercase') {
				setOutputText(inputText.toUpperCase());
			}
		};
		filterAndTransfer();
	}, [currentFilter, inputText]);

	const FilterChange = (value: string) => {
		setCurrentFilter(value);
	};

	const InputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setInputText(e.target.value);
	};

	const OutputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setOutputText(e.target.value);
	};

	return (
		<div className='pt-40'>
			<div className='container'>
				<div className='playground'>
					<div className='playground__actions'>
						<button
							onClick={() => FilterChange('lowercase')}
							className={`playground__btn btn-reset ${currentFilter === 'lowercase' && 'active'}`}
						>
							lowercase
						</button>
						<button
							onClick={() => FilterChange('uppercase')}
							className={`playground__btn text-uppercase btn-reset ${currentFilter === 'uppercase' && 'active'}`}
						>
							uppercase
						</button>
					</div>
					<div className='playground__items'>
						<div className='playground-item'>
							<div className='playground-item__header'>
								<div className='playground-item__title'>Input</div>
							</div>
							<div className='playground-item__body'>
								<textarea
									value={inputText}
									onChange={InputChange}
									className='playground-item__field custom-scrollbar'
								></textarea>
							</div>
						</div>
						<div className='playground-item'>
							<div className='playground-item__header'>
								<div className='playground-item__title'>Output</div>
							</div>
							<div className='playground-item__body'>
								<textarea
									value={outputText}
									onChange={OutputChange}
									className='playground-item__field custom-scrollbar'
								></textarea>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};