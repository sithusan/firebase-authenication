import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { User } from "schema/types/User";
import {
  getCurrentUser,
  signInWithPassword,
  signUp,
  siginInWithToken,
  deleteUserById,
  updateUser,
} from "../../app/auth/index";
import { AddUserInput } from "./inputTypes/AddUserInput";
import { Auth } from "../types/Auth";
import { UpdateUserInput } from "./inputTypes/UpdateUserInput";
@Resolver()
class UserResolver {
  private userCollections: User[] = [];

  @Query((returns) => User)
  async currentUser(): Promise<User> {
    return await getCurrentUser();
  }

  @Mutation((returns) => Auth)
  async deleteUserById(@Arg("data") data: UpdateUserInput): Promise<Auth> {
    return deleteUserById(data);
  }

  @Mutation((returns) => Auth)
  async updateUser(@Arg("data") data: UpdateUserInput): Promise<Auth> {
    return updateUser(data);
  }

  @Mutation((returns) => Auth)
  async signInUser(@Arg("data") data: AddUserInput): Promise<Auth> {
    return await signInWithPassword(data);
  }

  @Mutation((returns) => Auth)
  async signUp(@Arg("data") data: AddUserInput): Promise<Auth> {
    return signUp(data);
  }

  @Mutation((returns) => Auth)
  async signInWithToken(@Arg("token") token: string): Promise<Auth> {
    return siginInWithToken(token);
  }
}
