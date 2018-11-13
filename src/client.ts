import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = new HttpLink({
	uri: process.env.GRAPHQL_ENDPOINT,
	headers: {
		'x-hasura-access-key': process.env.HASURA_ACCESS_KEY
	}
});

const client = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache()
});

export default client;
