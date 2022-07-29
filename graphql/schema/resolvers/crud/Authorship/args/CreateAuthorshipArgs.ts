import * as TypeGraphQL from "type-graphql-v2-fork";
import { AuthorshipCreateInput } from "../../../inputs/AuthorshipCreateInput";

@TypeGraphQL.ArgsType()
export class CreateAuthorshipArgs {
  @TypeGraphQL.Field((_type) => AuthorshipCreateInput, { nullable: false })
  data!: AuthorshipCreateInput;
}
