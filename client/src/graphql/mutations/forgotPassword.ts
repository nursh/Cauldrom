import gql from 'graphql-tag';
import { 
  graphql,
  MutationFn 
} from 'react-apollo';


const forgotPassword = gql`
  mutation ($email: String!) {
    forgotPassword(email: $email)
  }
`;

interface Data {
  forgotPassword: boolean
}

export interface Props {
  email: string
}

interface Variable {
  email: string
}

export interface Mutation {
  forgotPassword: MutationFn<MutationPayload, MutationInput>
}

export interface MutationPayload {
  forgotPassword: boolean
}

interface MutationInput {
  email: string
}

export const FORGOT_PASSWORD_MUTATION = graphql<Props, Data, Variable>(
  forgotPassword,
  { name: 'forgotPassword' }
);

