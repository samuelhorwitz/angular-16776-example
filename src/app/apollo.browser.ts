import 'isomorphic-fetch';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { isBrowser } from '../isNode';

var initialState;

if (isBrowser() && window['UNIVERSAL_CACHE']) {
	initialState = window['UNIVERSAL_CACHE'].__APOLLO_STATE__;
}

export const client = new ApolloClient({
    networkInterface: createNetworkInterface({
        uri: 'http://example.com/graphql',
        opts: {
            credentials: 'include'
        }
    }),
    initialState
});