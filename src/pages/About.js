import React from 'react';
import { Title, Meta } from 'react-head';

function About() {
	return (
		<div>
			<Title>{`About | ${process.env.REACT_APP_NAME}`}</Title>
			<Meta name="description" content={process.env.REACT_APP_DESCRIPTION} />

			<Meta property="og:title" content={`About | ${process.env.REACT_APP_NAME}`} />
			<Meta property="twitter:title" content={`About | ${process.env.REACT_APP_NAME}`} />

			<Meta property="og:description" content={process.env.REACT_APP_DESCRIPTION} />
			<Meta property="twitter:description" content={process.env.REACT_APP_DESCRIPTION} />
			<h1>About</h1>
		</div>
	);
}

export default About;
