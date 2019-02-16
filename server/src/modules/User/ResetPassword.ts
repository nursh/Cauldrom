import bcrypt from 'bcryptjs';
import { Resolver, Mutation, Arg } from "type-graphql";

import { forgotPasswordPrefix } from '../Email/createURL';
import { getAsync, client } from '../../redis';
import { User } from './../../entity/User';


@Resolver(User)
export class ResetPasswordResolver {

  @Mutation(returns => Boolean)
  async resetPassword(
    @Arg("token") token: string,
    @Arg("password") password: string
  ): Promise<boolean> { 
    const key = `${forgotPasswordPrefix} ${token}`;

    const userId = await getAsync(key);
    if (!userId) return false;


    const hashedPassword = bcrypt.hashSync(password);
    await User.update({ id: userId }, { password: hashedPassword });
    await client.del(key);
    return true;
  }
}

