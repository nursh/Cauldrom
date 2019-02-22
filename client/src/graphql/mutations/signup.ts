import gql from "graphql-tag";
import { graphql, MutationFn } from "react-apollo";

import { User } from "../types";

const signup = gql`
  mutation($email: String!, $password: String!, $username: String!) {
    signup(data: { email: $email, password: $password, username: $username }) {
      id
    }
  }
`;

interface Data {
  signup: User;
}

export interface SignupProps {
  email: string;
  password: string;
  username: string;
}

interface Variable {
  email: string;
  password: string;
  username: string;
}

export interface SignupMutation {
  signup?: MutationFn<SignupMutationPayload, MutationInput>;
}

export interface SignupMutationPayload {
  signup: User;
}

interface MutationInput {
  email: string;
  password: string;
  username: string;
}

export const SIGNUP_MUTATION = graphql<SignupProps, Data, Variable>(signup, {
  name: "signup"
});
