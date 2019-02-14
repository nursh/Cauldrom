import { User } from '../../entity/User';
import { Resolver, Mutation, Arg, InputType, Field } from "type-graphql";
import bcrypt from 'bcryptjs';
import { IsEmail } from 'class-validator';


@InputType()
class SigninArgs {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  password: string;
}

@Resolver(User)
export class SignInResolver {

  @Mutation(returns => User, { nullable: true })
  async signin(
    @Arg("data") { email, password }: SigninArgs
  ): Promise<User | null> {

    const user = await User.findOne({ where: { email } });

    if (!user) return null;

    const validPassword = bcrypt.compareSync(password, user.password)
    if (!validPassword) return null;

    if (!user.confirmed) return null;

    return user;
  }

}


