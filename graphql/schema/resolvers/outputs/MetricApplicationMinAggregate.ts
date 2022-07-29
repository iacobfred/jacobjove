import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";

@TypeGraphQL.ObjectType("MetricApplicationMinAggregate", {
  isAbstract: true,
})
export class MetricApplicationMinAggregate {
  @TypeGraphQL.Field((_type) => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  actId!: string | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  metricId!: string | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  createdAt!: Date | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  updatedAt!: Date | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  archivedAt!: Date | null;
}
