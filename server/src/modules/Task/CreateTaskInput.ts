import { InputType, Field } from "type-graphql";

@InputType()
export class CreateTaskInput {

  @Field()
  text: string;

  @Field()
  id: string;
}