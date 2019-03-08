import { TaskResolver } from './modules/Task/task';
import { ProjectResolver } from './modules/Project/project';
import { buildSchema } from "type-graphql";

import { SignInResolver } from "./modules/User/SignIn";
import { SignUpResolver } from "./modules/User/SignUp";
import { ForgotPasswordResolver } from "./modules/User/ForgotPassword";
import { ConfirmUserResolver } from "./modules/User/ConfirmUser";
import { LogoutResolver } from "./modules/User/Logout";
import { ResetPasswordResolver } from "./modules/User/ResetPassword";
import { NotificationResolver } from './modules/Notification/notification';

export const schema = async () =>
  await buildSchema({
    resolvers: [
      SignInResolver,
      SignUpResolver,
      ConfirmUserResolver,
      ForgotPasswordResolver,
      LogoutResolver,
      ResetPasswordResolver,
      ProjectResolver,
      TaskResolver,
      NotificationResolver
    ]
  });
