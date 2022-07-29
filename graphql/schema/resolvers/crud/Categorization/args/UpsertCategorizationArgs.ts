import * as TypeGraphQL from "type-graphql-v2-fork";
import { CategorizationCreateInput } from "../../../inputs/CategorizationCreateInput";
import { CategorizationUpdateInput } from "../../../inputs/CategorizationUpdateInput";
import { CategorizationWhereUniqueInput } from "../../../inputs/CategorizationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertCategorizationArgs {
  @TypeGraphQL.Field((_type) => CategorizationWhereUniqueInput, { nullable: false })
  where!: CategorizationWhereUniqueInput;

  @TypeGraphQL.Field((_type) => CategorizationCreateInput, { nullable: false })
  create!: CategorizationCreateInput;

  @TypeGraphQL.Field((_type) => CategorizationUpdateInput, { nullable: false })
  update!: CategorizationUpdateInput;
}
