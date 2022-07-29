import * as TypeGraphQL from "type-graphql-v2-fork";
import { TaskWhereInput } from "../inputs/TaskWhereInput";

@TypeGraphQL.InputType("TaskListRelationFilter", {
  isAbstract: true,
})
export class TaskListRelationFilter {
  @TypeGraphQL.Field((_type) => TaskWhereInput, { nullable: true })
  every?: TaskWhereInput | undefined;

  @TypeGraphQL.Field((_type) => TaskWhereInput, { nullable: true })
  some?: TaskWhereInput | undefined;

  @TypeGraphQL.Field((_type) => TaskWhereInput, { nullable: true })
  none?: TaskWhereInput | undefined;
}
