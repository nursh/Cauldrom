import { Mutation, Arg, Resolver } from "type-graphql";


import { confirmationPrefix } from './../Email/createURL';
import { getAsync, client } from './../../redis';
import { User } from './../../entity/User';

@Resolver(User)
export class ConfirmUserResolver {

  @Mutation(returns => Boolean)
  async confirmUser(@Arg("token") token: string): Promise<boolean> {

    const key = `${confirmationPrefix} ${token}`;

    const userId = await getAsync(key);
    if (!userId) return false;

    await User.update({ id: userId }, { confirmed: true});
    await client.del(key);
    return true;
  }
}