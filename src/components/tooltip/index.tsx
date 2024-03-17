import { ITooltip } from '../../interfaces';

export const Tooltip: React.FC<ITooltip> = ({
	icon: Icon,
	iconSize,
	handleClick,
	text,
}) => {
	return (
		<div className='tooltip'>
			<button onClick={handleClick} className='tooltip__btn btn-reset'>
				<Icon size={iconSize} />
			</button>
			<span className='tooltip__txt'>{text}</span>
		</div>
	);
};
