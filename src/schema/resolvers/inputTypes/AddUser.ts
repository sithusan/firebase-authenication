import { InputType, Field, ID } from "type-graphql";
import { User } from "schema/types/User";

@InputType()
export class AddUserInput implements Partial<User> {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  age: number;

  @Field({ nullable: true })
  address?: string;

  @Field((type) => [String])
  family: string[];
}
