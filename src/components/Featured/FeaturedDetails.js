import React from 'react';
import { Img, useWindowSize } from 'the-platform';
import { useSpring, animated } from 'react-spring';
import css from 'styled-jsx/css';
import vars from '../../styles/variables';
import { rem, hexToRGB, media } from '../../styles/utils/utils';

const { color, spacing } = vars;

const { className, styles } = css.resolve`
  div.featured-cover {
    width: 100%;
    height: 50vh;
    overflow: hidden
  }

  img.preview {
    filter: blur(2vw);
  }
  
  img.loaded {
    opacity: 1;
    animation: reveal .3s ease-in;
  }
  
  div.featured-info {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 ${rem(spacing.lg)}
  }

  h1, h3 {
    font-family: 'Poppins', sans-serif;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1;
    text-transform: uppercase;
  }

  h3 {
    font-family: 'Poppins', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
		margin-top: ${rem(spacing.lg)}
  }

  h3 span {
    color: ${color.phreshrYellow}
  }

  .stripe {
    background: linear-gradient(to right, ${color.phreshrBlue} 0%, ${color.phreshrYellow} 100%);
    height: 2px;
    width: auto;
	}
	
	@media (${media.sm()}) {
		div.featured-cover {
      height: auto;
		}
	}

  @media (${media.lg()}) {
    div.featured-cover {
      height: 100vh;
		}
		div.featured-info {
			position: absolute;
			left: 0;
			bottom: ${rem(40)};
			width: 60vw
		}
    h1 {
      font-size: 2rem;
    }
  }

  @keyframes reveal {
    0% {
      opacity: 0;
    }
  
    100% {
      opacity: 1;
    }
  }`;

function FeaturedDetails({ featured }) {
	const { width, height } = useWindowSize();
	const [ slideInRight ] = useSpring({
		opacity: 1,
		color: color.kindaWhite,
		transform: 'translate3d(0px,0,0)',
		from: {
			opacity: 0,
			color: hexToRGB(color.kindaWhite, 0.1),
			transform: 'translate3d(-40px,0,0)'
		}
	});
	const [ slideInLeft ] = useSpring({
		opacity: 1,
		color: color.phreshrYellow,
		transform: 'translate3d(0px,0,0)',
		from: {
			opacity: 0,
			color: hexToRGB(color.phreshrYellow, 0.1),
			transform: `translate3d(40px,0,0)`
		}
	});
	const [ fadeIn ] = useSpring({
		opacity: 1,
		transform: 'translate3d(0px,0,0)',
		from: { opacity: 0, transform: 'translate3d(40px,0,0)' }
	});
	const { uid, id, title, cover, cover_preview, season, show } = featured;

	return (
		<React.Fragment>
			<div className={`featured-cover ${className}`}>
				<React.Suspense
					maxDuration={500}
					fallback={
						<img
							className={`featured-image preview ${className}`}
							src={cover_preview}
							style={{
								width: '100%',
								objectFit: 'cover',
								objectPosition: 'center top'
							}}
						/>
					}
				>
					<Img
						className={`featured-image loaded ${className}`}
						src={cover}
						style={{ width: '100%', objectFit: 'cover', objectPosition: 'center top' }}
					/>
				</React.Suspense>
			</div>
			<div className={`featured-info ${className}`}>
				<animated.h3 style={slideInLeft} className={className}>
					{show.title}
					<span className={className}> | </span>
					<span className={className}>Season.{season}</span>
				</animated.h3>
				<a href="#">
					<animated.h1 style={slideInRight} className={className}>
						{title}
					</animated.h1>
				</a>
				<animated.div style={fadeIn} className={`stripe ${className}`} />
			</div>
			{styles}
		</React.Fragment>
	);
}

export default FeaturedDetails;
