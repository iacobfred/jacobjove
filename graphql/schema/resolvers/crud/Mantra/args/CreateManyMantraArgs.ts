import * as TypeGraphQL from "type-graphql-v2-fork";
import { MantraCreateManyInput } from "../../../inputs/MantraCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMantraArgs {
  @TypeGraphQL.Field((_type) => [MantraCreateManyInput], { nullable: false })
  data!: MantraCreateManyInput[];

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
