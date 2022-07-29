import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";

@TypeGraphQL.ObjectType("MetricRecordMaxAggregate", {
  isAbstract: true,
})
export class MetricRecordMaxAggregate {
  @TypeGraphQL.Field((_type) => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  metricUsageId!: string | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  actionId!: string | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  value!: number | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  createdAt!: Date | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  updatedAt!: Date | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  archivedAt!: Date | null;
}
