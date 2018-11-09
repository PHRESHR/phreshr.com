import React from 'react';
import { Link } from '@reach/router';
import css from 'styled-jsx/css';

import logo from '../logo.svg';

const { className, styles } = css.resolve`
  a {
    display: flex;
    align-items: center;
    height: 35px;
  }
`;

function Logo() {
	return (
		<div className="logo">
			<Link className={className} to="/">
				<img src={logo} alt="PHRESHR" />
			</Link>
      <style jsx>{`
        .logo {
          display: flex;
          align-items: center;
          z-index: 9999;
        }
      `}</style>
      {styles}
		</div>
	);
}

export default Logo;