import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("BookUpdateauthorNamesInput", {
  isAbstract: true,
})
export class BookUpdateauthorNamesInput {
  @TypeGraphQL.Field((_type) => [String], { nullable: true })
  set?: string[] | undefined;

  @TypeGraphQL.Field((_type) => [String], { nullable: true })
  push?: string[] | undefined;
}
