import React, { lazy, Suspense, useState } from 'react';
import { Router } from '@reach/router';
import { HeadProvider } from 'react-head';
import { useSpring, animated } from 'react-spring';
import { hot } from 'react-hot-loader';

import Header from './components/Header'
import useToggle from './hooks/useToggle';
import { color } from './styles/variables';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const NotFound = lazy(() => import('./pages/NotFound'));

interface AppProps {}

function App() {
	const [ isOpen, toggle ] = useToggle(false);
	const [ blur ] = useSpring({
		filter: `blur(2vw)`,
		from: { filter: `blur(0vw)` }
	});
	return (
		<HeadProvider>
			<div onClick={isOpen ? () => toggle(false) : undefined}>
				<Header isOpen={isOpen} toggle={toggle} />
				<animated.div style={isOpen ? blur : undefined}>
					<Suspense fallback={<div>loading...</div>}>
						<Router>
							<Home path="/" />
							<About path="/about" />
							<NotFound default={true} />
						</Router>
					</Suspense>
				</animated.div>
			</div>
			<style jsx global>{`
				@custom-selector :--heading h1, h2, h3, h4, h5, h6;
				html {
					box-sizing: border-box;
					overflow-y: scroll;
				}
				*,
				*::before,
				*::after {
					box-sizing: inherit;
				}
				* {
					min-height: 0;
					min-width: 0;
				}
				body {
					margin: 0;
					padding: 0;
					font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu",
						"Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
					-webkit-font-smoothing: antialiased;
					-moz-osx-font-smoothing: grayscale;
				}
				body {
					background-color: ${color.backgroundColor};
					color: ${color.phreshrWhite};
					font-size: 16px;
				}
				:--heading {
					font-family: 'Poppins', sans-serif;
					font-weight: 700;
					text-transform: uppercase;
					letter-spacing: 0.1rem;
					margin: 0 0 1rem;
				}
				a {
					color: inherit;
					text-decoration: inherit;

					&:hover {
						text-decoration: none;
					}
				}
				p {
					line-height: 1.6;
					margin: 0;
				}
				img {
					max-width: 100%;
					height: 100%;
				}
				li {
					list-style: none
				}
				/* Helper Classes */
				.hidden {
					position: absolute;
					overflow: hidden;
					width: 0;
					height: 0;
					pointer-events: none;
				}
			`}</style>
		</HeadProvider>
	);
}

export default App;
