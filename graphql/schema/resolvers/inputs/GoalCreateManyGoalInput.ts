import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("GoalCreateManyGoalInput", {
  isAbstract: true,
})
export class GoalCreateManyGoalInput {
  @TypeGraphQL.Field((_type) => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  habitId!: string;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  quantity!: number;
}
