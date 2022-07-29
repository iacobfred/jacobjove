import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("GoalMinAggregate", {
  isAbstract: true,
})
export class GoalMinAggregate {
  @TypeGraphQL.Field((_type) => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  habitId!: string | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  goalId!: string | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  quantity!: number | null;
}
