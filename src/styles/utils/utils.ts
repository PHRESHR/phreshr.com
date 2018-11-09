import { breakpoints } from '../variables';
import { pxTo, mq } from './helpers';

export const hexToRGB = (hex: string, alpha = 1) => {
	let parseString = hex;
	if (hex.startsWith('#')) {
		parseString = hex.slice(1, 7);
	}
	const r = parseInt(parseString.length === 3 ? parseString.slice(0, 1).repeat(2) : parseString.slice(0, 2), 16);
	const g = parseInt(parseString.length === 3 ? parseString.slice(1, 2).repeat(2) : parseString.slice(2, 4), 16);
	const b = parseInt(parseString.length === 3 ? parseString.slice(2, 3).repeat(2) : parseString.slice(4, 6), 16);

	return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const rem = pxTo('rem');

export const em = pxTo('em');

export const media = mq(em, breakpoints);
