import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("ItemWhereUniqueInput", {
  isAbstract: true,
})
export class ItemWhereUniqueInput {
  @TypeGraphQL.Field((_type) => String, { nullable: true })
  id?: string | undefined;
}
