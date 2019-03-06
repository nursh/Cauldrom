import { InputType, Field } from "type-graphql";

@InputType()
export class CreateProjectInput {

  @Field()
  name: string;

  @Field()
  description: string;

}