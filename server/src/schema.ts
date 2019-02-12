import { buildSchema } from "type-graphql";

import { LoginResolver } from "./modules/User/Login";


export const schema = async () => await buildSchema({
  resolvers: [LoginResolver],
})