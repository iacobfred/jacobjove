import * as TypeGraphQL from "type-graphql-v2-fork";
import { CategoryUpdateInput } from "../../../inputs/CategoryUpdateInput";
import { CategoryWhereUniqueInput } from "../../../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateCategoryArgs {
  @TypeGraphQL.Field((_type) => CategoryUpdateInput, { nullable: false })
  data!: CategoryUpdateInput;

  @TypeGraphQL.Field((_type) => CategoryWhereUniqueInput, { nullable: false })
  where!: CategoryWhereUniqueInput;
}
