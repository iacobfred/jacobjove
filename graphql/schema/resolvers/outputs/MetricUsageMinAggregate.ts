import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";

@TypeGraphQL.ObjectType("MetricUsageMinAggregate", {
  isAbstract: true,
})
export class MetricUsageMinAggregate {
  @TypeGraphQL.Field((_type) => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  metricId!: string | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  habitId!: string | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  archivedAt!: Date | null;
}
