import {
	IoClipboardOutline,
	IoCheckmark,
	IoCloseOutline,
} from 'react-icons/io5';

import { useEffect, useRef, useState } from 'react';
import { Tooltip } from '../tooltip';
import { TextArea } from '../textarea';
import { Toast } from '../toast';

export const Playground = () => {
	const [inputText, setInputText] = useState('');
	const [currentFilter, setCurrentFilter] = useState('');
	const [isCopied, setIsCopied] = useState(false);
	const toastTimeoutRef = useRef<number | null>(null);

	useEffect(() => {
		const filterAndTransfer = () => {
			if (currentFilter === '') setInputText(inputText);

			if (currentFilter === 'lowercase') {
				setInputText(inputText.toLowerCase());
			}
			if (currentFilter === 'uppercase') {
				setInputText(inputText.toUpperCase());
			}
		};
		filterAndTransfer();
	}, [currentFilter, inputText]);

	const clearField = () => {
		setInputText('');
	};

	const copyToClipboard = () => {
		navigator.clipboard.writeText(inputText);

		if (!isCopied) {
			setIsCopied(true);
		}

		if (toastTimeoutRef.current) {
			clearTimeout(toastTimeoutRef.current);
		}

		toastTimeoutRef.current = setTimeout(() => {
			setIsCopied(false);
		}, 3000);
	};

	const FilterChange = (value: string) => {
		setCurrentFilter(value);
	};

	const InputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setInputText(e.target.value);
	};

	return (
		<>
			<Toast isActive={isCopied} />
			<div className='playground-section'>
				<div className='container'>
					<div className='playground'>
						<div className='playground__actions'>
							<button
								onClick={() => FilterChange('lowercase')}
								className={`playground__btn btn-reset ${currentFilter === 'lowercase' ? 'active' : ''}`}
							>
								lowercase
							</button>
							<button
								onClick={() => FilterChange('uppercase')}
								className={`playground__btn text-uppercase btn-reset ${currentFilter === 'uppercase' ? 'active' : ''}`}
							>
								uppercase
							</button>
						</div>
						<div className='playground__items'>
							<div className='playground-item'>
								<div className='playground-item__header'>
									<Tooltip
										handleClick={copyToClipboard}
										icon={IoClipboardOutline}
										iconSize={20}
										text='Copy to clipboard'
									/>
									<Tooltip
										handleClick={clearField}
										icon={IoCloseOutline}
										iconSize={25}
										text='Clear field'
									/>
								</div>
								<div className='playground-item__body'>
									<TextArea
										value={inputText}
										handleChange={InputChange}
										placeholder='Some text...'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
