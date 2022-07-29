import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("TaskCount", {
  isAbstract: true,
})
export class TaskCount {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  subtasks!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  calendarEvents!: number;
}
