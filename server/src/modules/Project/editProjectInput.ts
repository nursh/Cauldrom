import { InputType, Field } from "type-graphql";

@InputType()
export class EditProjectInput {

  @Field()
  id: string;
  
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  description?: string;
}