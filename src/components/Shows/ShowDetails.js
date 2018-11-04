import React from 'react';
import { Link } from '@reach/router';
import { Img } from 'the-platform';
import { useSpring, animated } from 'react-spring';
import css from 'styled-jsx/macro';
import vars from '../../styles/variables';
import { rem, media } from '../../styles/utils/utils';

const { color, spacing } = vars;

const { className, styles } = css.resolve`
  div.shows-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1rem;
    row-gap: 1rem;
  }
  a.show-link {
    display: block;
  }
  img.preview {
    filter: blur(2vw);
  }
  
  img.loaded {
    opacity: 1;
    animation: reveal .3s ease-in;
  }
  h2.show-title {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1;
    text-transform: uppercase;
    margin-top: ${rem(spacing.lg)};
  }
  p.show-description {
    line-height: 1.6;
  }
  @media (${media.lg()}) {
    h2.show-title {
      font-size: 1.5rem;
    }
  }
`;

function ShowDetails({ show }) {
	const [ slideInRight ] = useSpring({
		opacity: 1,
		transform: 'translate3d(0px,0,0)',
		from: {
			opacity: 0,
			transform: 'translate3d(-40px,0,0)'
		}
	});
	const { uid, id, title, description, poster, poster_preview } = show;
	return (
		<React.Fragment>
			<animated.div style={slideInRight} className={`show-item ${className}`}>
				<Link to="/about" className={`show-link ${className}`}>
					<React.Suspense
						maxDuration={500}
						fallback={
							<img
								className={`show-poster preview ${className}`}
								src={poster_preview}
								style={{
									width: '100%',
									objectFit: 'contain',
									objectPosition: 'center top'
								}}
							/>
						}
					>
						<Img
							className={`show-poster loaded ${className}`}
							src={poster}
							style={{ width: '100%', objectFit: 'contain', objectPosition: 'center top' }}
						/>
					</React.Suspense>
					<h2 className={`show-title ${className}`}>{title}</h2>
					<p className={`show-description ${className}`}>{description}</p>
				</Link>
			</animated.div>
			{styles}
		</React.Fragment>
	);
}

export default ShowDetails;
