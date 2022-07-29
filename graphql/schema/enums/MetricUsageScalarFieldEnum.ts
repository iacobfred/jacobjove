import * as TypeGraphQL from "type-graphql-v2-fork";

export enum MetricUsageScalarFieldEnum {
  id = "id",
  metricId = "metricId",
  habitId = "habitId",
  archivedAt = "archivedAt",
}
TypeGraphQL.registerEnumType(MetricUsageScalarFieldEnum, {
  name: "MetricUsageScalarFieldEnum",
  description: undefined,
});
