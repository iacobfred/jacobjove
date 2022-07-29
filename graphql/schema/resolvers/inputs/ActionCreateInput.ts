import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { HabitCreateNestedOneWithoutActionsInput } from "../inputs/HabitCreateNestedOneWithoutActionsInput";
import { MetricRecordCreateNestedManyWithoutActionInput } from "../inputs/MetricRecordCreateNestedManyWithoutActionInput";

@TypeGraphQL.InputType("ActionCreateInput", {
  isAbstract: true,
})
export class ActionCreateInput {
  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: false })
  start!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: false })
  end!: Date;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  notes?: string | null | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field((_type) => HabitCreateNestedOneWithoutActionsInput, { nullable: true })
  habit?: HabitCreateNestedOneWithoutActionsInput | undefined;

  @TypeGraphQL.Field((_type) => MetricRecordCreateNestedManyWithoutActionInput, { nullable: true })
  metricRecords?: MetricRecordCreateNestedManyWithoutActionInput | undefined;
}
