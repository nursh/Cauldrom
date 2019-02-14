import { buildSchema } from "type-graphql";

import { SignInResolver } from "./modules/User/SignIn";
import { SignUpResolver } from "./modules/User/SignUp";
import { ForgotPasswordResolver } from "./modules/User/ForgotPassword";
import { ConfirmUserResolver } from "./modules/User/ConfirmUser";
import { LogoutResolver } from "./modules/User/Logout";

export const schema = async () =>
  await buildSchema({
    resolvers: [
      SignInResolver,
      SignUpResolver,
      ConfirmUserResolver,
      ForgotPasswordResolver,
      LogoutResolver
    ]
  });
