import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CategorizationOrderByRelationAggregateInput", {
  isAbstract: true,
})
export class CategorizationOrderByRelationAggregateInput {
  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  _count?: "asc" | "desc" | undefined;
}
