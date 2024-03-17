import { ChangeEvent, MouseEvent } from 'react';

export interface ITextArea {
	value: string;
	handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
	placeholder: string;
}

export interface ITooltip {
	icon: React.ComponentType<{ size: number }>;
	iconSize: number;
	handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
	text: string;
}
