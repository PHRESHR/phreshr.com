import React, { lazy, Suspense, useState } from 'react';
import { Router } from '@reach/router';
import { HeadProvider } from 'react-head';
import { useSpring, animated } from 'react-spring';
import css from 'styled-jsx/macro';
import Header from './components/Header';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const NotFound = lazy(() => import('./pages/NotFound'));

function useToggle(init = false) {
	const [ isOpen, setIsOpen ] = useState(init);
	const open = () => setIsOpen(true);
	const close = () => setIsOpen(false);
	const toggle = () => setIsOpen(!isOpen);
	return [ isOpen, open, close, toggle ];
}

function App() {
	const [ isOpen, open, close, toggle ] = useToggle();
	const { className, styles } = css.resolve`
  div {
		padding: 0;
	}`;
	const [ blur ] = useSpring({
		filter: `blur(2vw)`,
		from: { filter: `blur(0vw)` }
	});
	return (
		<HeadProvider>
			<div className={className} onClick={isOpen ? close : null}>
				<Header isOpen={isOpen} toggle={toggle} />
				<animated.div style={isOpen ? blur : null}>
					<Suspense fallback={<div>loading...</div>}>
						<Router>
							<Home path="/" />
							<About path="/about" />
							<NotFound default={true} />
						</Router>
					</Suspense>
				</animated.div>
			</div>
			{styles}
		</HeadProvider>
	);
}

export default App;
