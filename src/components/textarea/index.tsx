import { ITextArea } from '../../interfaces';

export const TextArea: React.FC<ITextArea> = ({
	value,
	handleChange,
	placeholder,
}) => {
	return (
		<textarea
			value={value}
			onChange={handleChange}
			className='playground-item__field custom-scrollbar'
			placeholder={placeholder}
		></textarea>
	);
};
