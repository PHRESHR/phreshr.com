import React from 'react';
import { useMedia } from 'the-platform';
import css from 'styled-jsx/macro';
import Logo from './Logo';
import vars from '../styles/variables';
import { media } from '../styles/utils/utils';

const Nav = React.lazy(() => import('./Nav/Nav'));
const NavDrawer = React.lazy(() => import('./Nav/NavDrawer'));

const { color } = vars;

const { className, styles } = css.resolve`
  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    background-image: linear-gradient(to bottom,${color.transDark} 1%,${color.transLight});
    width: 100%;
    height: 3rem;
    padding: 0 1rem;
    z-index: 999;
  }
  button {
    margin: 0;
    padding: 0;
    border: 0;
    background: none;
    cursor: pointer;
  }
  button:focus {
    outline: none;
  }
  .icon {
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    margin: 0 auto;
    fill: #fff;
  }
  div.mobile-menu {
    z-index: 999;
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @media (${media.md()}) {
    header {
      height: 5rem;
    }
  }
  @media (${media.lg()}) {
    div.mobile-menu {
      display: none;
    }
  }`;

function Header({ isOpen, toggle }) {
	const mq_large = useMedia(`(${media.lg()})`);

	return (
		<header className={className}>
			<Logo />
			<React.Suspense fallback={'loading...'}>
				{mq_large ? <Nav isOpen={isOpen} /> : <NavDrawer isOpen={isOpen} />}
			</React.Suspense>
			<div className={`mobile-menu ${className}`}>
				<button className={className} onClick={toggle}>
					{!isOpen ? (
						<svg className={`icon icon-menu-dots ${className}`}>
							<use xlinkHref="#icon-menu-dots" />
						</svg>
					) : (
						<svg className={`icon icon-cross ${className}`}>
							<use xlinkHref="#icon-cross" />
						</svg>
					)}
				</button>
			</div>
			{styles}
		</header>
	);
}

export default Header;
