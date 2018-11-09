import React from 'react';
import { RouteComponentProps } from "@reach/router"
import { Title, Meta } from 'react-head';

function About(props: RouteComponentProps) {
  return (
    <>
      <Title>{`About | ${process.env.APP_NAME}`}</Title>
			<Meta name="description" content={process.env.APP_DESCRIPTION} />

			<Meta property="og:title" content={`About | ${process.env.APP_NAME}`} />
			<Meta property="twitter:title" content={`About | ${process.env.APP_NAME}`} />

			<Meta property="og:description" content={process.env.APP_DESCRIPTION} />
			<Meta property="twitter:description" content={process.env.APP_DESCRIPTION} />
      <h1>About</h1>
    </>
  );
}

export default About;