import gql from 'graphql-tag';
import { 
  graphql,
  MutationFn 
} from 'react-apollo';


const resetPassword = gql`
  mutation ($token: String!, $password: String!) {
    resetPassword(token: $token, password: $password)
  }
`;

interface Data {
  resetPassword: boolean
}

export interface Props {
  token: string,
  password: string
}

interface Variable {
  token: string,
  password: string
}

export interface Mutation {
  resetPassword?: MutationFn<MutationPayload, MutationInput>
}

export interface MutationPayload {
  resetPassword: boolean
}

interface MutationInput {
  token: string,
  password: string
}

export const RESET_PASSWORD_MUTATION = graphql<Props, Data, Variable>(
  resetPassword,
  { name: 'resetPassword' }
);

