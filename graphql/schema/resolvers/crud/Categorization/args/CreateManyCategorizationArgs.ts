import * as TypeGraphQL from "type-graphql-v2-fork";
import { CategorizationCreateManyInput } from "../../../inputs/CategorizationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCategorizationArgs {
  @TypeGraphQL.Field((_type) => [CategorizationCreateManyInput], { nullable: false })
  data!: CategorizationCreateManyInput[];

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
