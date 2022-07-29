import * as TypeGraphQL from "type-graphql-v2-fork";
import { TaskCreateManyInput } from "../../../inputs/TaskCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTaskArgs {
  @TypeGraphQL.Field((_type) => [TaskCreateManyInput], { nullable: false })
  data!: TaskCreateManyInput[];

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
