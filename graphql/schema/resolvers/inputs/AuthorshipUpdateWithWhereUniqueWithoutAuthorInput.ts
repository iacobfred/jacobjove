import * as TypeGraphQL from "type-graphql-v2-fork";
import { AuthorshipUpdateWithoutAuthorInput } from "../inputs/AuthorshipUpdateWithoutAuthorInput";
import { AuthorshipWhereUniqueInput } from "../inputs/AuthorshipWhereUniqueInput";

@TypeGraphQL.InputType("AuthorshipUpdateWithWhereUniqueWithoutAuthorInput", {
  isAbstract: true,
})
export class AuthorshipUpdateWithWhereUniqueWithoutAuthorInput {
  @TypeGraphQL.Field((_type) => AuthorshipWhereUniqueInput, { nullable: false })
  where!: AuthorshipWhereUniqueInput;

  @TypeGraphQL.Field((_type) => AuthorshipUpdateWithoutAuthorInput, { nullable: false })
  data!: AuthorshipUpdateWithoutAuthorInput;
}
