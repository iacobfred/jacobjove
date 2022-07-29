import * as TypeGraphQL from "type-graphql-v2-fork";
import { FREQUENCY } from "../../enums/FREQUENCY";

@TypeGraphQL.InputType("ActionScheduleTemplateCreateManyInput", {
  isAbstract: true,
})
export class ActionScheduleTemplateCreateManyInput {
  @TypeGraphQL.Field((_type) => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  actId!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  scheduleTemplateId!: string;

  @TypeGraphQL.Field((_type) => FREQUENCY, { nullable: true })
  frequency?: "MINUTE" | "HOUR" | "DAY" | "WEEK" | "MONTH" | "YEAR" | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  multiplier?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  quantity?: number | undefined;
}
