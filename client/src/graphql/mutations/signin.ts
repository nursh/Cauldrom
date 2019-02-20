import gql from 'graphql-tag';
import { graphql, MutationFn } from 'react-apollo';


import { User } from '../types';


const signin = gql`
  mutation ($email: String!, $password: String!) {
    signin(data: {
      email: $email,
      password: $password
    }) {
      id
      username
    }
  }
`;

interface Data {
  signin: User
}

export interface SigninProps {
  email: string
  password: string
}

interface Variable {
  email: string
  password: string
}

export interface SignInMutation {
  signin?: MutationFn<SignInMutationPayload, MutationInput>
}

export interface SignInMutationPayload {
  signin: User
}

interface MutationInput {
  email: string,
  password: string
}

export const SIGNIN_MUTATION = graphql<SigninProps, Data, Variable>(
  signin,
  { name: 'signin' }
);

