import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("NotebookCount", {
  isAbstract: true,
})
export class NotebookCount {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  notes!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  userPermissions!: number;
}
