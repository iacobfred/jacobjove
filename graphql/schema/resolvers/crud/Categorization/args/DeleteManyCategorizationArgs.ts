import * as TypeGraphQL from "type-graphql-v2-fork";
import { CategorizationWhereInput } from "../../../inputs/CategorizationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCategorizationArgs {
  @TypeGraphQL.Field((_type) => CategorizationWhereInput, { nullable: true })
  where?: CategorizationWhereInput | undefined;
}
