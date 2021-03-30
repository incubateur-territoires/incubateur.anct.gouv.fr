import Vue from 'vue';
import { GraphQLClient } from 'graphql-request';

const graphql = new GraphQLClient(process.env.GRIDSOME_GRAPHQL_URL, {
  headers: {
    authorization: `Bearer ${process.env.GRIDSOME_GRAPHQL_TOKEN}`,
  },
});

Object.defineProperties(Vue.prototype, {
  $graphql: {
    get() {
      return graphql
    }
  }
});
