import * as TypeGraphQL from "type-graphql-v2-fork";
import { ListWhereInput } from "../inputs/ListWhereInput";

@TypeGraphQL.InputType("ListRelationFilter", {
  isAbstract: true,
})
export class ListRelationFilter {
  @TypeGraphQL.Field((_type) => ListWhereInput, { nullable: true })
  is?: ListWhereInput | undefined;

  @TypeGraphQL.Field((_type) => ListWhereInput, { nullable: true })
  isNot?: ListWhereInput | undefined;
}
