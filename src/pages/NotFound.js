import React from 'react';
import { Title, Meta } from 'react-head';

function NotFound() {
	return (
		<div>
			<Title>{`Not Found | ${process.env.REACT_APP_NAME}`}</Title>
			<Meta name="description" content={process.env.REACT_APP_DESCRIPTION} />

			<Meta property="og:title" content={`Not Found | ${process.env.REACT_APP_NAME}`} />
			<Meta property="twitter:title" content={`Not Found | ${process.env.REACT_APP_NAME}`} />

			<Meta property="og:description" content={process.env.REACT_APP_DESCRIPTION} />
			<Meta property="twitter:description" content={process.env.REACT_APP_DESCRIPTION} />
			<h1>Not Found</h1>
		</div>
	);
}

export default NotFound;
