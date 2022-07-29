import * as TypeGraphQL from "type-graphql-v2-fork";
import { ReadingWhereUniqueInput } from "../../../inputs/ReadingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteReadingArgs {
  @TypeGraphQL.Field((_type) => ReadingWhereUniqueInput, { nullable: false })
  where!: ReadingWhereUniqueInput;
}
