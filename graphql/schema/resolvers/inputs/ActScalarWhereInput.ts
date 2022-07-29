import * as TypeGraphQL from "type-graphql-v2-fork";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("ActScalarWhereInput", {
  isAbstract: true,
})
export class ActScalarWhereInput {
  @TypeGraphQL.Field((_type) => [ActScalarWhereInput], { nullable: true })
  AND?: ActScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActScalarWhereInput], { nullable: true })
  OR?: ActScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActScalarWhereInput], { nullable: true })
  NOT?: ActScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  slug?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, { nullable: true })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => BoolFilter, { nullable: true })
  isPublic?: BoolFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, { nullable: true })
  parentId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;
}
