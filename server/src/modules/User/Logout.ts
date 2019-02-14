import { MyContext } from './../../types/MyContext';
import { Resolver, Mutation, Ctx } from "type-graphql";

@Resolver()
export class LogoutResolver {

  @Mutation(returns => Boolean)
  async logout(
    @Ctx() { req, res }: MyContext
  ): Promise<boolean> {
    return new Promise((resolve, reject) => {
      req.session!.destroy((err) => {
        if (err) {
          console.log(err);
          reject(false);
        }

        res.clearCookie('userId');
        resolve(true);
      })
    });
  }
}