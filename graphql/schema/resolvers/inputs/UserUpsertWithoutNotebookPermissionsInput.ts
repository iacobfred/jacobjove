import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateWithoutNotebookPermissionsInput } from "../inputs/UserCreateWithoutNotebookPermissionsInput";
import { UserUpdateWithoutNotebookPermissionsInput } from "../inputs/UserUpdateWithoutNotebookPermissionsInput";

@TypeGraphQL.InputType("UserUpsertWithoutNotebookPermissionsInput", {
  isAbstract: true,
})
export class UserUpsertWithoutNotebookPermissionsInput {
  @TypeGraphQL.Field((_type) => UserUpdateWithoutNotebookPermissionsInput, { nullable: false })
  update!: UserUpdateWithoutNotebookPermissionsInput;

  @TypeGraphQL.Field((_type) => UserCreateWithoutNotebookPermissionsInput, { nullable: false })
  create!: UserCreateWithoutNotebookPermissionsInput;
}
