import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { User } from "schema/types/User";
import { AddUserInput } from "./inputTypes/AddUser";

@Resolver()
class UserResolver {
  private userCollections: User[] = [
    {
      id: "1",
      name: "Aung Aung",
      age: 23,
      address: "Yangon",
      family: ["Mother", "Father"],
    },
    {
      id: "2",
      name: "Ko Aung",
      age: 13,
      address: "Mandalay",
      family: ["Mother", "Father", "Brother"],
    },
  ];

  @Query((returns) => [User])
  async users(): Promise<User[]> {
    return await this.userCollections;
  }

  @Query((returns) => User)
  async user(@Arg("id", { nullable: true }) id?: string): Promise<User> {
    return await this.userCollections.find((user) => user.id === id);
  }

  @Mutation((returns) => [User])
  async addUser(@Arg("data") data: AddUserInput): Promise<User[]> {
    this.userCollections.push(data);
    return await this.userCollections;
  }
}
