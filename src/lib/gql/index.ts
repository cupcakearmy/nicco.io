import { GraphQLClient } from 'graphql-request'
import { getSdk } from './gen'

const client = new GraphQLClient('https://api.nicco.io/graphql')
export const SDK = getSdk(client)
