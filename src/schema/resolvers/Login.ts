import { Resolver, Mutation, Args, UseMiddleware } from "type-graphql";
import { LoginArgs } from "./argTypes/LoginArgs";
import { login } from "../../app/Login";
import { LogAccess } from "./middleware/Login";
@Resolver()
class LoginResolver {
  @Mutation((returns) => Boolean)
  @UseMiddleware(LogAccess)
  async login(@Args() { username, password }: LoginArgs): Promise<Boolean> {
    return await login(username, password);
  }
}
