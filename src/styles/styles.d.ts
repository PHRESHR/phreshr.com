interface Colors {
	backgroundColor: string;
	phreshrBlack: string;
	phreshrWhite: string;
	phreshrYellow: string;
	phreshrBlue: string;
	transLight: string;
	transMid: string;
	transDark: string;
	transNone: string;
}

interface Headings {
	family: string;
}

interface Spacing {
	sm: string;
	md: string;
	lg: string;
}

interface Breakpoints {
	sm: string;
	md: string;
	lg: string;
	xl: string;
	xxl: string;
}

const color: Colors = {
	phreshrBlack: '#111111',
	phreshrWhite: '#FEFEFB',
	phreshrYellow: '#FDE74C',
	phreshrBlue: '#2980B9',
	transLight: 'rgba(0, 0, 0, .1)',
	transMid: 'rgba(0, 0, 0, .55)',
	transDark: 'rgba(0, 0, 0, .85)',
	transNone: 'rgba(0, 0, 0, 0)'
};

const headings: Headings = {
	family: 'Poppins, sans-serif'
};

const spacing: Spacing = {
	sm: 4,
	md: 8,
	lg: 16
};

const breakpoints: Breakpoints = {
	sm: 576,
	md: 768,
	lg: 992,
	xl: 1200,
	xxl: 1400
};
