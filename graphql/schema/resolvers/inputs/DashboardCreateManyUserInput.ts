import * as GraphQLScalars from "graphql-scalars";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { DashboardLayouts } from "../../models/Dashboard";
import { DateTimeScalar } from "../../scalars";

@TypeGraphQL.InputType("DashboardCreateManyUserInput", {
  isAbstract: true,
})
export class DashboardCreateManyUserInput {
  @TypeGraphQL.Field((_type) => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  name!: string;

  @TypeGraphQL.Field((_type) => GraphQLScalars.JSONResolver, { nullable: true })
  layouts?: DashboardLayouts | undefined;

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  isDefault?: boolean | undefined;

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  isPublic?: boolean | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;
}
