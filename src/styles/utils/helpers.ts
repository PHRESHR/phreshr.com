// Utility functions
export const getRootElementFontSize = () =>
	parseFloat(
		// of the computed font-size, so in px
		getComputedStyle(
			// for the root <html> element
			document.documentElement as Element
		).fontSize as string
	);

export const stripUnit = (value: string) => parseInt(value);

export const pxTo = (to: string) => (value: string, base = '16px') => {
	const newBase = getRootElementFontSize() || stripUnit(base);
	return `${parseInt(value) / newBase}${to}`;
};

export const mq = (unit: any, breakpoints: any): any => {
	return Object.keys(breakpoints).reduce((accumulator: any, label) => {
		const bp = breakpoints[label];
		const maxWidth = bp - 1;
		accumulator[label] = (range = 'from') => {
			switch (range) {
				case 'until':
					return `min-width: ${unit(String(maxWidth))}`;
				default:
					return `min-width: ${unit(bp)}`;
			}
		};
		return accumulator;
	}, {});
};
