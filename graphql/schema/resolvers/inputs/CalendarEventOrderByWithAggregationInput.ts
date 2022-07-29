import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";
import { CalendarEventAvgOrderByAggregateInput } from "../inputs/CalendarEventAvgOrderByAggregateInput";
import { CalendarEventCountOrderByAggregateInput } from "../inputs/CalendarEventCountOrderByAggregateInput";
import { CalendarEventMaxOrderByAggregateInput } from "../inputs/CalendarEventMaxOrderByAggregateInput";
import { CalendarEventMinOrderByAggregateInput } from "../inputs/CalendarEventMinOrderByAggregateInput";
import { CalendarEventSumOrderByAggregateInput } from "../inputs/CalendarEventSumOrderByAggregateInput";

@TypeGraphQL.InputType("CalendarEventOrderByWithAggregationInput", {
  isAbstract: true,
})
export class CalendarEventOrderByWithAggregationInput {
  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  remoteId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  calendarId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  scheduleId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  habitId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  taskId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  start?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  end?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  allDay?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  notes?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  canceled?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  archivedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => CalendarEventCountOrderByAggregateInput, { nullable: true })
  _count?: CalendarEventCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => CalendarEventAvgOrderByAggregateInput, { nullable: true })
  _avg?: CalendarEventAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => CalendarEventMaxOrderByAggregateInput, { nullable: true })
  _max?: CalendarEventMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => CalendarEventMinOrderByAggregateInput, { nullable: true })
  _min?: CalendarEventMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => CalendarEventSumOrderByAggregateInput, { nullable: true })
  _sum?: CalendarEventSumOrderByAggregateInput | undefined;
}
