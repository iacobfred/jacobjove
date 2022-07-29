import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarEventRemoteIdCalendarIdCompoundUniqueInput } from "../inputs/CalendarEventRemoteIdCalendarIdCompoundUniqueInput";

@TypeGraphQL.InputType("CalendarEventWhereUniqueInput", {
  isAbstract: true,
})
export class CalendarEventWhereUniqueInput {
  @TypeGraphQL.Field((_type) => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => CalendarEventRemoteIdCalendarIdCompoundUniqueInput, {
    nullable: true,
  })
  remoteId_calendarId?: CalendarEventRemoteIdCalendarIdCompoundUniqueInput | undefined;
}
