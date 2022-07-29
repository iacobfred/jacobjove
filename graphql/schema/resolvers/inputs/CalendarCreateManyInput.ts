import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarProvider } from "../../enums/CalendarProvider";
import { DateTimeScalar } from "../../scalars";

@TypeGraphQL.InputType("CalendarCreateManyInput", {
  isAbstract: true,
})
export class CalendarCreateManyInput {
  @TypeGraphQL.Field((_type) => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  userId!: string;

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

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  accountId?: string | undefined;

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
}
