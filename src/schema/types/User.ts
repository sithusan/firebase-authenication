import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class User {
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
