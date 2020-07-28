import { User } from "schema/types/User";
import { InputType, Field } from "type-graphql";

@InputType()
export class AddUserInput implements Partial<User> {
  @Field({nullable:true})
  name?: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  password: string;
}
