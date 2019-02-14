import { IsEmail } from 'class-validator';
import { User } from '../../entity/User';
import { Resolver, Mutation, Arg, Query, InputType, Field } from "type-graphql";
import bcrypt from 'bcryptjs';
import { sendEmail } from '../Email/emailSender';
import { createURL } from '../Email/createURL';
import { doesEmailExist } from './doesEmailExist';

@InputType()
class SignupArgs {
  @Field()
  @IsEmail()
  @doesEmailExist()
  email: string;

  @Field()
  password: string;

  @Field()
  username: string;
}


@Resolver(User)
export class SignUpResolver {

  @Query(returns => String) 
  async name() {
    return 'Cauldrum Application';
  }

  @Mutation(returns => User)
  async signup(
    @Arg("data") { username, email, password } : SignupArgs,
  ): Promise<User | null> {

    const hashedPassword = bcrypt.hashSync(password);

    const user = await User.create({
      username,
      email,
      password: hashedPassword
    }).save();

    await sendEmail(email, await createURL(user.id, 'confirm'));
    return user;
  }

}