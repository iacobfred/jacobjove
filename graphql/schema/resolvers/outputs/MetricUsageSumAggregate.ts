import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("MetricUsageSumAggregate", {
  isAbstract: true,
})
export class MetricUsageSumAggregate {
  @TypeGraphQL.Field((_type) => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  metricId!: string | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  habitId!: string | null;
}
