import * as GraphQLScalars from "graphql-scalars";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";

@TypeGraphQL.InputType("ListCreateManyOwnerInput", {
  isAbstract: true,
})
export class ListCreateManyOwnerInput {
  @TypeGraphQL.Field((_type) => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  name!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  slug!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  description?: string | undefined;

  @TypeGraphQL.Field((_type) => GraphQLScalars.JSONResolver, { nullable: true })
  fields?: Record<string, string> | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;
}
