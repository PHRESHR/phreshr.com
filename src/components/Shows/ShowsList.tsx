import React, { useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import css from 'styled-jsx/css';
import ShowDetails from './ShowDetails';

import { color, spacing } from '../../styles/variables';
import { media, hexToRGB, rem } from '../../styles/utils/utils';

const shows_query = gql`
	query {
		show {
			id
			uid
			title
			description
			poster
		}
	}
`;

const { className, styles } = css.resolve`
  section {
		padding: 0 ${rem(spacing.lg)};
		overflow: hidden;
  }
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100px;
  }
  h2.shows-label{
    font-size: 1.25rem;
    font-weight: 400;
    color: ${color.phreshrYellow};
    margin-top: ${rem(spacing.lg)};
  }
  .stripe {
    background-color: ${color.phreshrBlue};
    height: 1rem;
    width: 2px;
    transform: rotate(25deg);
  }
  div.shows-grid {
    display: grid;
		grid-gap: 1rem;
		grid-template-columns: repeat(10, 43%);
		column-gap: 1rem;
		row-gap: 1rem;
		grid-column: 1 / -1;
		overflow-x: scroll;
		scroll-snap-type: x proximity;
		-webkit-overflow-scrolling: touch;

		@media (${media.lg()}) {
			grid-template-columns: repeat(4, 1fr);
		}
	}
	`;

interface ShowsListProps {}

function ShowsList(props: ShowsListProps) {
	const gridRef = useRef<HTMLDivElement>(null);
	const [ slideInRight ] = useSpring({
		opacity: 1,
		color: color.phreshrYellow,
		transform: 'translate3d(0px,0,0)',
		from: {
			opacity: 0,
			color: hexToRGB(color.phreshrYellow, 0.1),
			transform: 'translate3d(-40px,0,0)'
		}
	});
	const [ slideUp ] = useSpring({
		opacity: 1,
		transform: 'rotate(25deg) translate3d(0,0px,0)',
		from: { opacity: 0, transform: 'rotate(25deg) translate3d(0,20px,0)' }
	});

	useEffect(() => {
			// hide scrollbar
			const el = gridRef.current;
			el ? el.style.marginBottom = el.clientHeight - el.offsetHeight + 'px' : el
		},
		[],
	)

	return (
		<section className={className}>
			<header className={`shows-header ${className}`}>
				<animated.h2 style={slideInRight} className={`shows-label ${className}`}>
					Shows
				</animated.h2>
				<animated.div style={slideUp} className={`stripe ${className}`} />
				<animated.div style={slideUp} className={`stripe ${className}`} />
			</header>
			<div ref={gridRef} className={`shows-grid ${className}`}>
				<Query query={shows_query}>
					{({ data: { show: shows }, loading, error }) => {
						if (loading) return <p>Loading...</p>;
						if (error) return <p>ERROR: {error.message}</p>;
						return shows && <ShowDetails shows={shows} />;
					}}
				</Query>
			</div>
			{styles}
		</section>
	);
}

export default ShowsList;
