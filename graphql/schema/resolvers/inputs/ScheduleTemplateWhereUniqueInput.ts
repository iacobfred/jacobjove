import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("ScheduleTemplateWhereUniqueInput", {
  isAbstract: true,
})
export class ScheduleTemplateWhereUniqueInput {
  @TypeGraphQL.Field((_type) => String, { nullable: true })
  id?: string | undefined;
}
