import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("GoalAvgAggregate", {
  isAbstract: true,
})
export class GoalAvgAggregate {
  @TypeGraphQL.Field((_type) => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  habitId!: string | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Float, { nullable: true })
  goalId!: number | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Float, { nullable: true })
  quantity!: number | null;
}
