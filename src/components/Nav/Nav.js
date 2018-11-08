import React, { useState } from 'react';
import { Link } from '@reach/router';
import css from 'styled-jsx/css';
import vars from '../../styles/variables';
import { media } from '../../styles/utils/utils';

const { color } = vars;

const { className, styles } = css.resolve`
  nav {
    display: none;
  }
  a {
    color: #fefefe;
  }
  a,
  :global(.active) {
    display: flex;
    align-items: center;
    text-decoration: none;
    height: 100%;
  }
  :global(.active) {
    color: #111;
    background-color: ${color.phreshrYellow};
  }
  span {
    font-family: sans-serif;
    font-size: 1rem;
    font-weight: 400;
    text-transform: uppercase;
    text-decoration: none;
    padding: .5rem;
    margin: 0;
  }
  span:hover {
    text-decoration: none;
  }
  @media (${media.lg()}) {
    nav {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }`;

const isActive = ({ isCurrent }) => {
	return isCurrent ? { className: 'active' } : null;
};

function Nav() {
	return (
		<React.Fragment>
			<nav className={className}>
				<Link to="/" getProps={isActive} className={className}>
					<span className={className}>Home</span>
				</Link>
				<Link to="/about" getProps={isActive} className={className}>
					<span className={className}>About</span>
				</Link>
				{styles}
			</nav>
		</React.Fragment>
	);
}

export default Nav;
