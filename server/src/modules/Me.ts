import { Resolver, Query } from "type-graphql";

@Resolver()
export class MeResolver {

  @Query(returns => String, { nullable: true })
  async me() {
    return 'Cauldrom Application';
  }
}