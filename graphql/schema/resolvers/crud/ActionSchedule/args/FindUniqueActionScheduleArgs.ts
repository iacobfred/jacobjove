import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleWhereUniqueInput } from "../../../inputs/ActionScheduleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueActionScheduleArgs {
  @TypeGraphQL.Field((_type) => ActionScheduleWhereUniqueInput, { nullable: false })
  where!: ActionScheduleWhereUniqueInput;
}
