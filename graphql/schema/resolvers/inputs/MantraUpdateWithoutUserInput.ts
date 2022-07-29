import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("MantraUpdateWithoutUserInput", {
  isAbstract: true,
})
export class MantraUpdateWithoutUserInput {
  @TypeGraphQL.Field({ nullable: true })
  content?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;
}
