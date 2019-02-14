import { ConfirmUserResolver } from './modules/User/ConfirmUser';
import { buildSchema } from "type-graphql";

import { SignInResolver } from "./modules/User/SignIn";
import { SignUpResolver } from "./modules/User/SignUp";
import { ForgotPasswordResolver } from './modules/User/ForgotPassword';


export const schema = async () => await buildSchema({
  resolvers: [
    SignInResolver,
    SignUpResolver,
    ConfirmUserResolver,
    ForgotPasswordResolver
  ],
})