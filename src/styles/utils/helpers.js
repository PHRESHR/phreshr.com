// Utility functions
export const getRootElementFontSize = () =>
	parseFloat(
		// of the computed font-size, so in px
		getComputedStyle(
			// for the root <html> element
			document.documentElement
		).fontSize
	);

export const stripUnit = (value) => parseInt(value);

export const pxTo = (to) => (value, base = '16px') => {
	const newBase = getRootElementFontSize() || stripUnit(base);
	return `${value / newBase}${to}`;
};
