import React, {useState, useEffect} from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import FeaturedDetails from './FeaturedDetails';

import { color } from '../../styles/variables'
import { media } from "../../styles/utils/utils";

const featured_query = gql`
	query {
		episode(
      where: {is_featured: {_eq: true}}
      order_by: {created_at: desc}
    ) {
      id
      uid
      title
      cover
      season
      episode_number
      show {
        title
      }
    }
	}
`;

interface FeaturedProps {}

function Featured() {
  
	return (
		<div className="featured">
			<Query query={featured_query}>
				{({ data: { episode: episodes }, loading, error }) => {
					if (loading) return <p>Loading...</p>;
					if (error) return <p>ERROR: {error.message}</p>;
					return episodes && <FeaturedDetails featured={episodes} />;
				}}
			</Query>
			<style jsx>{`
				div.featured {
					display: flex;
					flex-direction: column;
					align-items: start;

					@media (${media.lg()}) {
						position: relative
					}
				}
			`}</style>
		</div>
	);
}

export default Featured;
