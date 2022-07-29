import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionCreateInput } from "../../../inputs/ActionCreateInput";

@TypeGraphQL.ArgsType()
export class CreateActionArgs {
  @TypeGraphQL.Field((_type) => ActionCreateInput, { nullable: false })
  data!: ActionCreateInput;
}
