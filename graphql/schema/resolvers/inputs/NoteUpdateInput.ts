import * as TypeGraphQL from "type-graphql-v2-fork";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { NotebookUpdateOneRequiredWithoutNotesInput } from "../inputs/NotebookUpdateOneRequiredWithoutNotesInput";

@TypeGraphQL.InputType("NoteUpdateInput", {
  isAbstract: true,
})
export class NoteUpdateInput {
  @TypeGraphQL.Field({ nullable: true })
  title?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  body?: string | null | undefined;

  @TypeGraphQL.Field((_type) => BoolFieldUpdateOperationsInput, { nullable: true })
  isPublic?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field((_type) => NotebookUpdateOneRequiredWithoutNotesInput, { nullable: true })
  notebook?: NotebookUpdateOneRequiredWithoutNotesInput | undefined;
}
