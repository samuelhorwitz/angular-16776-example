import 'isomorphic-fetch';
import ApolloClient, { createNetworkInterface } from 'apollo-client';

export const client = new ApolloClient({
    networkInterface: createNetworkInterface({
        uri: 'http://example.com/graphql'
    }),
    ssrMode: true
});