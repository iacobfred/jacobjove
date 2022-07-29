import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("CalendarEventCountAggregate", {
  isAbstract: true,
})
export class CalendarEventCountAggregate {
  @TypeGraphQL.Field((_type) => String, { nullable: false })
  id!: string;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  uid!: number;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  remoteId!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  calendarId!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  scheduleId!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  habitId!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  taskId!: string;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  title!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  start!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  end!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  allDay!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  notes!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  canceled!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  createdAt!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  updatedAt!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  archivedAt!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  _all!: number;
}
