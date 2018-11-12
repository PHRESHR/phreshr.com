import React from 'react';
import { Title, Meta } from 'react-head';
import { RouteComponentProps } from "@reach/router"

import Featured from '../components/Featured/Featured';
import ShowsList from '../components/Shows/ShowsList';

function Home(props: RouteComponentProps) {

  return (
    <>
      <Title>{process.env.APP_NAME}</Title>
			<Meta name="description" content={process.env.APP_DESCRIPTION} />

			<Meta property="og:title" content={process.env.APP_NAME} />
			<Meta property="twitter:title" content={process.env.APP_NAME} />

			<Meta property="og:description" content={process.env.APP_DESCRIPTION} />
			<Meta property="twitter:description" content={process.env.APP_DESCRIPTION} />
      <div>
        <Featured />
        <ShowsList />
      </div>
    </>
  );
}

export default Home;