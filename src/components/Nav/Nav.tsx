import React from 'react';
import { Link } from '@reach/router';

import { color } from '../../styles/variables'
import { media } from "../../styles/utils/utils";

interface NavProps {}
function Nav(props:NavProps) {
  return (
    <nav>
      <Link to="/">
        <span>Home</span>
      </Link>
      <Link to="/about">
        <span>About</span>
      </Link>
      <style jsx>{`
        nav {
          display: none;
      
          @media (${media.lg()}) {
            display: flex;
            flex-direction: row;
            align-items: center;
          }
        }
        a {
          color: ${color.phreshrWhite};
        }
        [aria-current]:not([aria-current="false"]) {
          color: ${color.phreshrYellow};
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
      `}</style>
    </nav>
  )
}

export default Nav