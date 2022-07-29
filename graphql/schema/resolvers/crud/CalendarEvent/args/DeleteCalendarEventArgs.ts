import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarEventWhereUniqueInput } from "../../../inputs/CalendarEventWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteCalendarEventArgs {
  @TypeGraphQL.Field((_type) => CalendarEventWhereUniqueInput, { nullable: false })
  where!: CalendarEventWhereUniqueInput;
}
