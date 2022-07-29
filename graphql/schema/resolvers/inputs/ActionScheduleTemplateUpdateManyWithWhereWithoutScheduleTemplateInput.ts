import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleTemplateScalarWhereInput } from "../inputs/ActionScheduleTemplateScalarWhereInput";
import { ActionScheduleTemplateUpdateManyMutationInput } from "../inputs/ActionScheduleTemplateUpdateManyMutationInput";

@TypeGraphQL.InputType("ActionScheduleTemplateUpdateManyWithWhereWithoutScheduleTemplateInput", {
  isAbstract: true,
})
export class ActionScheduleTemplateUpdateManyWithWhereWithoutScheduleTemplateInput {
  @TypeGraphQL.Field((_type) => ActionScheduleTemplateScalarWhereInput, { nullable: false })
  where!: ActionScheduleTemplateScalarWhereInput;

  @TypeGraphQL.Field((_type) => ActionScheduleTemplateUpdateManyMutationInput, { nullable: false })
  data!: ActionScheduleTemplateUpdateManyMutationInput;
}
