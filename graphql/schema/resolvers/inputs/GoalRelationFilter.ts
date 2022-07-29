import * as TypeGraphQL from "type-graphql-v2-fork";
import { GoalWhereInput } from "../inputs/GoalWhereInput";

@TypeGraphQL.InputType("GoalRelationFilter", {
  isAbstract: true,
})
export class GoalRelationFilter {
  @TypeGraphQL.Field((_type) => GoalWhereInput, { nullable: true })
  is?: GoalWhereInput | undefined;

  @TypeGraphQL.Field((_type) => GoalWhereInput, { nullable: true })
  isNot?: GoalWhereInput | undefined;
}
