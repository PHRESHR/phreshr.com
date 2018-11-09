import React from 'react';
import { RouteComponentProps } from "@reach/router"
import { Title, Meta } from 'react-head';

interface ShowParams {
  uid?: string;
}

function Show(props: RouteComponentProps<ShowParams>) {
  return (
    <>
      <Title>{`Show | ${process.env.APP_NAME}`}</Title>
			<Meta name="description" content={process.env.APP_DESCRIPTION} />

			<Meta property="og:title" content={`Show | ${process.env.APP_NAME}`} />
			<Meta property="twitter:title" content={`Show | ${process.env.APP_NAME}`} />

			<Meta property="og:description" content={process.env.APP_DESCRIPTION} />
			<Meta property="twitter:description" content={process.env.APP_DESCRIPTION} />
      <h1>Show</h1>
    </>
  );
}

export default Show;