import { InputType, Field } from "type-graphql";

@InputType()
export class CreateNotificationInput {

  @Field()
  id: string;

  @Field()
  message: string;
  
}