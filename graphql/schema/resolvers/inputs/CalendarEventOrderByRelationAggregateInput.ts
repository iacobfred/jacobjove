import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CalendarEventOrderByRelationAggregateInput", {
  isAbstract: true,
})
export class CalendarEventOrderByRelationAggregateInput {
  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  _count?: "asc" | "desc" | undefined;
}
