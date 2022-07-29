import * as TypeGraphQL from "type-graphql-v2-fork";
import { ShelvingShelfIdPositionCompoundUniqueInput } from "../inputs/ShelvingShelfIdPositionCompoundUniqueInput";

@TypeGraphQL.InputType("ShelvingWhereUniqueInput", {
  isAbstract: true,
})
export class ShelvingWhereUniqueInput {
  @TypeGraphQL.Field((_type) => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => ShelvingShelfIdPositionCompoundUniqueInput, { nullable: true })
  shelfId_position?: ShelvingShelfIdPositionCompoundUniqueInput | undefined;
}
