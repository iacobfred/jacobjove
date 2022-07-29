import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleTemplateUpdateManyWithoutActInput } from "../inputs/ActionScheduleTemplateUpdateManyWithoutActInput";
import { ActUpdateManyWithoutParentInput } from "../inputs/ActUpdateManyWithoutParentInput";
import { ActUpdateOneWithoutVariantsInput } from "../inputs/ActUpdateOneWithoutVariantsInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CategorizationUpdateManyWithoutActInput } from "../inputs/CategorizationUpdateManyWithoutActInput";
import { IdentityActRelationUpdateManyWithoutActionInput } from "../inputs/IdentityActRelationUpdateManyWithoutActionInput";
import { MetricApplicationUpdateManyWithoutActInput } from "../inputs/MetricApplicationUpdateManyWithoutActInput";

@TypeGraphQL.InputType("ActUpdateWithoutHabitsInput", {
  isAbstract: true,
})
export class ActUpdateWithoutHabitsInput {
  @TypeGraphQL.Field({ nullable: true })
  name?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  slug?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  description?: string | null | undefined;

  @TypeGraphQL.Field((_type) => BoolFieldUpdateOperationsInput, { nullable: true })
  isPublic?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field((_type) => ActUpdateOneWithoutVariantsInput, { nullable: true })
  parent?: ActUpdateOneWithoutVariantsInput | undefined;

  @TypeGraphQL.Field((_type) => ActUpdateManyWithoutParentInput, { nullable: true })
  variants?: ActUpdateManyWithoutParentInput | undefined;

  @TypeGraphQL.Field((_type) => MetricApplicationUpdateManyWithoutActInput, { nullable: true })
  metricApplications?: MetricApplicationUpdateManyWithoutActInput | undefined;

  @TypeGraphQL.Field((_type) => IdentityActRelationUpdateManyWithoutActionInput, { nullable: true })
  identityRelations?: IdentityActRelationUpdateManyWithoutActionInput | undefined;

  @TypeGraphQL.Field((_type) => ActionScheduleTemplateUpdateManyWithoutActInput, { nullable: true })
  scheduleTemplates?: ActionScheduleTemplateUpdateManyWithoutActInput | undefined;

  @TypeGraphQL.Field((_type) => CategorizationUpdateManyWithoutActInput, { nullable: true })
  categorizations?: CategorizationUpdateManyWithoutActInput | undefined;
}
