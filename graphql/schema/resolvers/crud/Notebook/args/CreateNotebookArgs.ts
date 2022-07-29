import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookCreateInput } from "../../../inputs/NotebookCreateInput";

@TypeGraphQL.ArgsType()
export class CreateNotebookArgs {
  @TypeGraphQL.Field((_type) => NotebookCreateInput, { nullable: false })
  data!: NotebookCreateInput;
}
