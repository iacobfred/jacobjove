import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { CalendarEventCreateNestedManyWithoutTaskInput } from "../inputs/CalendarEventCreateNestedManyWithoutTaskInput";
import { HabitCreateNestedOneWithoutTasksInput } from "../inputs/HabitCreateNestedOneWithoutTasksInput";
import { TaskCreateNestedManyWithoutParentInput } from "../inputs/TaskCreateNestedManyWithoutParentInput";
import { TaskCreateNestedOneWithoutSubtasksInput } from "../inputs/TaskCreateNestedOneWithoutSubtasksInput";
import { UserCreateNestedOneWithoutTasksInput } from "../inputs/UserCreateNestedOneWithoutTasksInput";

@TypeGraphQL.InputType("TaskCreateInput", {
  isAbstract: true,
})
export class TaskCreateInput {
  @TypeGraphQL.Field((_type) => String, { nullable: false })
  title!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  description?: string | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  plannedStartDate?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  dueDate?: Date | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  rank?: number | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  completedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;

  // TODO: require one or the other of user & userId
  @TypeGraphQL.Field((_type) => String, { nullable: true })
  userId?: string | undefined;

  @TypeGraphQL.Field((_type) => UserCreateNestedOneWithoutTasksInput, { nullable: true })
  user?: UserCreateNestedOneWithoutTasksInput | undefined;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  parentId?: string | undefined;

  @TypeGraphQL.Field((_type) => TaskCreateNestedOneWithoutSubtasksInput, { nullable: true })
  parent?: TaskCreateNestedOneWithoutSubtasksInput | undefined;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  habitId?: string | undefined;

  @TypeGraphQL.Field((_type) => HabitCreateNestedOneWithoutTasksInput, { nullable: true })
  habit?: HabitCreateNestedOneWithoutTasksInput | undefined;

  @TypeGraphQL.Field((_type) => TaskCreateNestedManyWithoutParentInput, { nullable: true })
  subtasks?: TaskCreateNestedManyWithoutParentInput | undefined;

  @TypeGraphQL.Field((_type) => CalendarEventCreateNestedManyWithoutTaskInput, { nullable: true })
  calendarEvents?: CalendarEventCreateNestedManyWithoutTaskInput | undefined;
}
