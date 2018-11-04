import React, { useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import ShowDetails from './ShowDetails';
import css from 'styled-jsx/macro';
import vars from '../../styles/variables';
import { rem, hexToRGB, media } from '../../styles/utils/utils';

const { color, spacing } = vars;

const data = [
	{
		uid: 'mic-check',
		id: '1',
		title: 'Mic Check',
		description: 'Post-ironic palo santo shoreditch butcher, plaid keffiyeh hot chicken ramps quinoa.',
		poster:
			'https://res.cloudinary.com/phreshr-media/image/upload/ar_2:3,c_fill,g_face:center,w_465,dpr_auto,f_auto,q_auto/v1494274321/mic-check/poster.jpg',
		poster_preview:
			'https://res.cloudinary.com/phreshr-media/image/upload/ar_2:3,c_fill,g_face:center,e_blur:100,fl_strip_profile,dpr_auto,f_auto,q_auto:low,w_178/v1494274321/mic-check/poster.jpg'
	},
	{
		uid: 'smoke-sessions',
		id: '2',
		title: 'Smoke Sessions',
		description: 'Asymmetrical la croix mumblecore, gentrify semiotics ennui.',
		poster:
			'https://res.cloudinary.com/phreshr-media/image/upload/ar_2:3,c_fill,g_face:center,w_465,dpr_auto,f_auto,q_auto/v1494274321/smoke-sessions/poster.jpg',
		poster_preview:
			'https://res.cloudinary.com/phreshr-media/image/upload/ar_2:3,c_fill,g_face:center,dpr_auto,f_auto,q_auto:low,w_178/v1494274321/smoke-sessions/poster.jpg'
	},
	{
		uid: 'i-am-hip-hop',
		id: '3',
		title: 'I Am Hip-Hop',
		description: 'Blog cray church-key small batch crucifix photo booth.',
		poster:
			'https://res.cloudinary.com/phreshr-media/image/upload/ar_2:3,c_fill,g_face:center,w_465,dpr_auto,f_auto,q_auto/v1494274321/i-am-hip-hop/poster.jpg',
		poster_preview:
			'https://res.cloudinary.com/phreshr-media/image/upload/ar_2:3,c_fill,g_face:center,dpr_auto,f_auto,q_auto:low,w_178/v1494274321/i-am-hip-hop/poster.jpg'
	},
	{
		uid: 'beats-rhymes-smoke',
		id: '4',
		title: 'Beats, Rhymes & Smoke',
		description:
			'Synth godard crucifix flexitarian bespoke tbh bitters, skateboard fixie drinking vinegar keffiyeh kinfolk ',
		poster:
			'https://res.cloudinary.com/phreshr-media/image/upload/ar_2:3,c_fill,g_face:center,w_465,dpr_auto,f_auto,q_auto/v1541264518/beats-rhymes-smoke/poster.jpg',
		poster_preview:
			'https://res.cloudinary.com/phreshr-media/image/upload/ar_2:3,c_fill,g_face:center,dpr_auto,f_auto,q_auto:low,w_178/v1541264518/beats-rhymes-smoke/poster.jpg'
	}
];

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
		grid-template-columns: repeat(${data.length}, 43%);
		column-gap: 1rem;
		row-gap: 1rem;
		grid-column: 1 / -1;
		overflow-x: scroll;
		scroll-snap-type: x proximity;
		-webkit-overflow-scrolling: touch;
	}

  @media (${media.lg()}) {
    div.shows-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
	`;

function ShowsList(props) {
	const gridRef = useRef();
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
		const el = gridRef.current;
		console.log(el.clientHeight - el.offsetHeight);

		return (el.style.marginBottom = el.clientHeight - el.offsetHeight + 'px');
	}, []);

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
				{data && data.map((show) => <ShowDetails key={show.id} show={show} />)}
			</div>
			{styles}
		</section>
	);
}

export default ShowsList;
