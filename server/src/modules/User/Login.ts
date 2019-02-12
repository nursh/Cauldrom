import { User } from './../../entity/User';
import { Resolver, Mutation, Arg, Query } from "type-graphql";


@Resolver()
export class LoginResolver {

  @Query(() => String)
  async name() {
    return 'Cauldrom Application'
  }

}