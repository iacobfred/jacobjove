import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MetricRecordOrderByRelationAggregateInput", {
  isAbstract: true,
})
export class MetricRecordOrderByRelationAggregateInput {
  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  _count?: "asc" | "desc" | undefined;
}
