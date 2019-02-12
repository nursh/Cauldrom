import { User } from './../../entity/User';
import { Resolver, Query } from "type-graphql";


@Resolver(User)
export class LoginResolver {

  @Query(returns => String)
  async name() {
    return 'Cauldrom Application'
  }

}