import React from 'react';
import { Title, Meta } from 'react-head';
import css from 'styled-jsx/macro';

import Featured from '../components/Featured/Featured';
import ShowsList from '../components/Shows/ShowsList';
// import QueryPosts from '../components/QueryPosts';

function Home() {
	const { className, styles } = css.resolve`
  div {
		font-family: Lato;
		padding: 0;
	}
	h1 {
		font-size: 2.5rem;
	}`;
	return (
		<React.Fragment>
			<Title>{process.env.REACT_APP_NAME}</Title>
			<Meta name="description" content={process.env.REACT_APP_DESCRIPTION} />

			<Meta property="og:title" content={process.env.REACT_APP_NAME} />
			<Meta property="twitter:title" content={process.env.REACT_APP_NAME} />

			<Meta property="og:description" content={process.env.REACT_APP_DESCRIPTION} />
			<Meta property="twitter:description" content={process.env.REACT_APP_DESCRIPTION} />
			<Featured />
			<ShowsList />
			{styles}
		</React.Fragment>
	);
}

export default Home;
