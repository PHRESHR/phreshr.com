import React from 'react';
import { Link } from '@reach/router';
import { animated, useSpring } from 'react-spring';
import css from 'styled-jsx/css';

import { color } from '../../styles/variables'
import { hexToRGB } from "../../styles/utils/utils";

const { className, styles } = css.resolve`
  div {
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
    color: ${color.phreshrWhite};
    padding: 1rem 0;
    border-top:0;
    border-left:0;
    border-right:0;
    border-bottom: 1px solid ${color.phreshrYellow};
    -webkit-border-image: linear-gradient(to right,${color.phreshrBlue} 0%,${color.phreshrYellow} 100%);
    border-image: linear-gradient(to right,${color.phreshrBlue} 0%,${color.phreshrYellow} 100%);
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

interface NavDrawerProps {
  isOpen: boolean;
}

function NavDrawer({ isOpen }: NavDrawerProps) {
  const [ showNav ] = useSpring({
		opacity: Number(isOpen),
		backgroundColor: `${hexToRGB(color.phreshrBlack, 0.9)}`,
		transform: `scale(${Number(isOpen)})`,
		from: {
			opacity: Number(!isOpen),
			backgroundColor: `${hexToRGB(color.phreshrBlack, -5)}`,
			transform: `scale(${Number(!isOpen)})`
		}
  });

  const [ zoomIn ] = useSpring({
		opacity: Number(isOpen),
		transform: `scale(${Number(isOpen)})`,
		from: {
			opacity: Number(!isOpen),
			transform: `scale(${Number(!isOpen)})`
		}
  });
  
  return (
    <animated.div style={showNav} className={`nav-drawer ${className}`}>
      <animated.nav style={zoomIn} className={className}>
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
      </animated.nav>
      {styles}
    </animated.div>
  )
}

export default NavDrawer