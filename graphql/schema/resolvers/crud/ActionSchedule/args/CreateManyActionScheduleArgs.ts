import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleCreateManyInput } from "../../../inputs/ActionScheduleCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyActionScheduleArgs {
  @TypeGraphQL.Field((_type) => [ActionScheduleCreateManyInput], { nullable: false })
  data!: ActionScheduleCreateManyInput[];

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
