import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";

@TypeGraphQL.InputType("RoutineCreateManyInput", {
  isAbstract: true,
})
export class RoutineCreateManyInput {
  @TypeGraphQL.Field((_type) => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  userId!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  name!: string;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  durationInMinutes?: number | undefined;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  notes?: string | null | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;
}
