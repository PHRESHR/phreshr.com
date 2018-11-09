import React from 'react';
import { RouteComponentProps } from "@reach/router"
import { Title, Meta } from 'react-head';

function NotFound(props: RouteComponentProps) {
  return (
    <>
      <Title>{`Not Found | ${process.env.APP_NAME}`}</Title>
			<Meta name="description" content={process.env.APP_DESCRIPTION} />

			<Meta property="og:title" content={`Not Found | ${process.env.APP_NAME}`} />
			<Meta property="twitter:title" content={`Not Found | ${process.env.APP_NAME}`} />

			<Meta property="og:description" content={process.env.APP_DESCRIPTION} />
			<Meta property="twitter:description" content={process.env.APP_DESCRIPTION} />
      <h1>Not Found</h1>
    </>
  );
}

export default NotFound;