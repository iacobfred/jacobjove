import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";

@TypeGraphQL.InputType("CalendarEventCreateWithoutCalendarInput", {
  isAbstract: true,
})
export class CalendarEventCreateWithoutCalendarInput {
  @TypeGraphQL.Field((_type) => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  remoteId?: string | null | undefined;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  title!: string;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: false })
  start!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  end?: Date | null | undefined;

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  allDay?: boolean | undefined;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  notes?: string | null | undefined;

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  canceled?: boolean | null | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  scheduleId?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  habitId?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  taskId?: string | null | undefined;
}
