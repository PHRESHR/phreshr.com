import React from 'react';
import { Link } from '@reach/router';
import { animated, useSpring, Spring } from 'react-spring';
import css from 'styled-jsx/css';
import vars from '../../styles/variables';
import { rem, hexToRGB } from '../../styles/utils/utils';

const { color, spacing } = vars;

const { className, styles } = css.resolve`
  nav {
    display: flex;
    flex-direction: column;
    transform-origin: 100% 0%;
    position: absolute;
    right: 0px;
    top: 0;
    text-align: center;
    width: 100%;
    height: 100vh;
    padding: 5rem 2rem 3rem;
    z-index: 999;
    opacity: 0;
  }
  a {
    display: flex;
    align-items: center;
    color: #fefefe;
    padding: ${rem(spacing.lg)} 0;
    border-top:0;
    border-left:0;
    border-right:0;
    border-bottom: 1px solid ${color.phreshrYellow};
    -webkit-border-image: linear-gradient(to right,#2980B9 0%,#FDE74C 100%);
    border-image: linear-gradient(to right,#2980B9 0%,#FDE74C 100%);
    -webkit-border-image-slice: 1;
    border-image-slice: 1;
    opacity: 0;
    transition: transform .5s cubic-bezier(0.23, 1, 0.32, 1), opacity .5s cubic-bezier(0.23, 1, 0.32, 1);
  }
  a.open {
    opacity: 1;
    transition: transform .5s cubic-bezier(0.23, 1, 0.32, 1), opacity .5s cubic-bezier(0.23, 1, 0.32, 1);
  }
  span {
    font-family: 'Poppins', sans-serif;
    font-size: 1.25rem;
    font-weight: 400;
    text-transform: uppercase;
    text-decoration: none;
    margin: 0;
  }
`;

function NavDrawer({ isOpen }) {
	const [ showNav ] = useSpring({
		opacity: Number(isOpen),
		backgroundColor: `${hexToRGB(color.black, 0.9)}`,
		transform: `scale(${Number(isOpen)})`,
		from: {
			opacity: Number(!isOpen),
			backgroundColor: `${hexToRGB(color.black, -5)}`,
			transform: `scale(${Number(!isOpen)})`
		}
	});
	return (
		<animated.nav style={showNav} className={className}>
			<Link to="/" className={isOpen ? `open ${className}` : className}>
				<span className={className}>Home</span>
			</Link>
			<Link to="/about" className={isOpen ? `open ${className}` : className}>
				<span className={className}>Shows</span>
			</Link>
			<Link to="/about" className={isOpen ? `open ${className}` : className}>
				<span className={className}>About</span>
			</Link>
			<Link to="/about" className={isOpen ? `open ${className}` : className}>
				<span className={className}>Log In</span>
			</Link>
			{styles}
		</animated.nav>
	);
}

export default NavDrawer;
