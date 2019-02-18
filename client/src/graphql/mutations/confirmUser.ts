import gql from 'graphql-tag';
import { 
  graphql,
  MutationFn 
} from 'react-apollo';


const confirmUser = gql`
  mutation confirmUser($token: String!) {
    confirmUser(token: $token)
  }
`;

export interface Data {
  confirmUser: boolean
}

export interface Props {
  token: string
}

interface Variable {
  token: string
}

export interface Mutation {
  confirmUser?: MutationFn<MutationPayload, MutationInput>
}

export interface MutationPayload {
  confirmUser: boolean
}

interface MutationInput {
  token: string
}



export const CONFIRM_USER_MUTATION = graphql<Props, Data, Variable>(
  confirmUser,
  {
    name: 'confirmUser',
    options: ({ token }) => ({
      variables: { token }
    })
  }
);
