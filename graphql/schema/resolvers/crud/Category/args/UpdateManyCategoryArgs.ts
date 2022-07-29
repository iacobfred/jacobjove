import * as TypeGraphQL from "type-graphql-v2-fork";
import { CategoryUpdateManyMutationInput } from "../../../inputs/CategoryUpdateManyMutationInput";
import { CategoryWhereInput } from "../../../inputs/CategoryWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCategoryArgs {
  @TypeGraphQL.Field((_type) => CategoryUpdateManyMutationInput, { nullable: false })
  data!: CategoryUpdateManyMutationInput;

  @TypeGraphQL.Field((_type) => CategoryWhereInput, { nullable: true })
  where?: CategoryWhereInput | undefined;
}
