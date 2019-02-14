import { User } from './../../entity/User';
import { Resolver, Mutation, Arg } from "type-graphql";
import { sendEmail } from '../Email/emailSender';
import { createURL } from '../Email/createURL';

@Resolver(User)
export class ForgotPasswordResolver {

  @Mutation(returns => Boolean)
  async forgotPassword(
    @Arg("email") email: string
  ): Promise<boolean> {

    const user = await User.findOne({ where: { email }});
    if (!user) throw new Error('Email does not exist');

    await sendEmail(email, await createURL(user.id), 'reset');
    return true;
  }
}