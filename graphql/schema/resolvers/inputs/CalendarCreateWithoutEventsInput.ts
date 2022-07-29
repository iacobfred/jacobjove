import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarProvider } from "../../enums/CalendarProvider";
import { DateTimeScalar } from "../../scalars";
import { AccountCreateNestedOneWithoutCalendarsInput } from "../inputs/AccountCreateNestedOneWithoutCalendarsInput";
import { UserCreateNestedOneWithoutCalendarsInput } from "../inputs/UserCreateNestedOneWithoutCalendarsInput";

@TypeGraphQL.InputType("CalendarCreateWithoutEventsInput", {
  isAbstract: true,
})
export class CalendarCreateWithoutEventsInput {
  @TypeGraphQL.Field((_type) => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  name?: string | undefined;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  color?: string | undefined;

  @TypeGraphQL.Field((_type) => CalendarProvider, { nullable: true })
  provider?: "google" | "apple" | undefined;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  remoteId?: string | null | undefined;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  syncToken?: string | undefined;

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  primary?: boolean | undefined;

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  public?: boolean | undefined;

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  enabled?: boolean | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field((_type) => UserCreateNestedOneWithoutCalendarsInput, { nullable: false })
  user!: UserCreateNestedOneWithoutCalendarsInput;

  @TypeGraphQL.Field((_type) => AccountCreateNestedOneWithoutCalendarsInput, { nullable: true })
  account?: AccountCreateNestedOneWithoutCalendarsInput | undefined;
}
