import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("MantraWhereUniqueInput", {
  isAbstract: true,
})
export class MantraWhereUniqueInput {
  @TypeGraphQL.Field((_type) => String, { nullable: true })
  id?: string | undefined;
}
