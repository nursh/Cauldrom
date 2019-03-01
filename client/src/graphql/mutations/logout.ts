import gql from 'graphql-tag';
import { graphql, MutationFn } from 'react-apollo';


const logout = gql`
  mutation {
    logout
  }
`

interface Data {
  logout: boolean
}

export interface Mutation {
  logout: MutationFn<MutationPayload>
}

export interface MutationPayload {
  logout: boolean
}

export const LOGOUT = graphql<{}, Data>(
  logout,
  { name: 'logout'}
)