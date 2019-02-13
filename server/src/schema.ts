import { buildSchema } from "type-graphql";

import { SignInResolver } from "./modules/User/SignIn";
import { SignUpResolver } from "./modules/User/SignUp";


export const schema = async () => await buildSchema({
  resolvers: [SignInResolver, SignUpResolver],
})