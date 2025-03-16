import { useAsyncData } from '#app'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { defineNuxtPlugin } from '#app'

// Create the apollo client
const httpLink = createHttpLink({
  uri: process.env.GRAPHCMS_ENDPOINT
})

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
    },
    query: {
      fetchPolicy: 'no-cache',
    },
  },
})

export const useGraphQL = () => {
  const queryGraphQL = async (query: any, variables = {}) => {
    try {
      const { data } = await apolloClient.query({
        query,
        variables,
      })
      return { data, error: null }
    } catch (error) {
      console.error('GraphQL Error:', error)
      return { data: null, error }
    }
  }

  return {
    queryGraphQL
  }
} 