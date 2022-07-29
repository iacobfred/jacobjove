import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActWhereInput } from "../../../inputs/ActWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyActArgs {
  @TypeGraphQL.Field((_type) => ActWhereInput, { nullable: true })
  where?: ActWhereInput | undefined;
}
