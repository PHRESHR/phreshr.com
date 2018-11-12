import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = createHttpLink({
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
