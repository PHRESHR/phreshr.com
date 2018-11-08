import React from 'react';
import { Link } from '@reach/router';
import css from 'styled-jsx/css';

import logo from '../logo.svg';

const { className, styles } = css.resolve`
  div {
    display: flex;
    align-items: center;
    z-index: 9999;
  }
  a {
    display: flex;
    align-items: center;
    height: 35px;
  }`;

function Logo() {
	return (
		<div className={'logo ' + className}>
			<Link to="/" className={className}>
				<img src={logo} alt="PHRESHR" />
			</Link>
			{styles}
		</div>
	);
}

export default Logo;
