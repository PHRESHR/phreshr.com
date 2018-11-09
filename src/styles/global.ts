import css from 'styled-jsx/css';

export default css.global`
	@custom-media --viewport-sm (width >= 36em);
	@custom-media --viewport-md (width >= 48em);
	@custom-media --viewport-lg (width >= 62em);
	@custom-media --viewport-xl (width >= 75em);
	@custom-media --viewport-xxl (width >= 87.5em);
	@custom-selector :--heading h1, h2, h3, h4, h5, h6;
	
	html {
		box-sizing: border-box;
		overflow-y: scroll;
	}
	*, *::before, *::after {
		box-sizing: inherit;
	}
	* {
		min-height: 0;
		min-width: 0;
	}
	body {
		margin: 0;
		padding: 0;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
			"Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
			sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	body {
		background-color: var(--background-color);
		color: var(--phreshr-white);
		font-size: 16px;
	}
	:--heading {
		font-family: 'Poppins', sans-serif;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.1rem;
		margin: 0 0 1rem;

		@media (--viewport-md) {
			margin-block: 0;
		}
	}
	a {
		color: inherit;
		text-decoration: inherit;

		&:hover {
			text-decoration: none;
		}
	}
	.hidden {
		position: absolute;
		overflow: hidden;
		width: 0;
		height: 0;
		pointer-events: none;
	}
`;
