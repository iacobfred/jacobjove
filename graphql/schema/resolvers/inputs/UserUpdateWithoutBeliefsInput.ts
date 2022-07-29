import * as GraphQLScalars from "graphql-scalars";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { AccountUpdateManyWithoutUserInput } from "../inputs/AccountUpdateManyWithoutUserInput";
import { BookReviewUpdateManyWithoutUserInput } from "../inputs/BookReviewUpdateManyWithoutUserInput";
import { BookshelfUpdateManyWithoutOwnerInput } from "../inputs/BookshelfUpdateManyWithoutOwnerInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CalendarUpdateManyWithoutUserInput } from "../inputs/CalendarUpdateManyWithoutUserInput";
import { DashboardUpdateManyWithoutUserInput } from "../inputs/DashboardUpdateManyWithoutUserInput";
import { HabitUpdateManyWithoutUserInput } from "../inputs/HabitUpdateManyWithoutUserInput";
import { IdentityUpdateManyWithoutUserInput } from "../inputs/IdentityUpdateManyWithoutUserInput";
import { ListUpdateManyWithoutOwnerInput } from "../inputs/ListUpdateManyWithoutOwnerInput";
import { MantraUpdateManyWithoutUserInput } from "../inputs/MantraUpdateManyWithoutUserInput";
import { NotebookUpdateManyWithoutOwnerInput } from "../inputs/NotebookUpdateManyWithoutOwnerInput";
import { NotebookUserPermissionUpdateManyWithoutUserInput } from "../inputs/NotebookUserPermissionUpdateManyWithoutUserInput";
import { ReadingUpdateManyWithoutUserInput } from "../inputs/ReadingUpdateManyWithoutUserInput";
import { TaskUpdateManyWithoutUserInput } from "../inputs/TaskUpdateManyWithoutUserInput";
import { ValueUpdateManyWithoutUserInput } from "../inputs/ValueUpdateManyWithoutUserInput";

@TypeGraphQL.InputType("UserUpdateWithoutBeliefsInput", {
  isAbstract: true,
})
export class UserUpdateWithoutBeliefsInput {
  @TypeGraphQL.Field({ nullable: true })
  uid?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  name?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  email?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  emailVerified?: Date | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  image?: string | null | undefined;

  @TypeGraphQL.Field((_type) => BoolFieldUpdateOperationsInput, { nullable: true })
  isAdmin?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => GraphQLScalars.JSONResolver, { nullable: true })
  settings?: Record<string, string> | undefined;

  @TypeGraphQL.Field({ nullable: true })
  lastLogin?: Date | null | undefined;

  @TypeGraphQL.Field((_type) => AccountUpdateManyWithoutUserInput, { nullable: true })
  accounts?: AccountUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field((_type) => CalendarUpdateManyWithoutUserInput, { nullable: true })
  calendars?: CalendarUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field((_type) => IdentityUpdateManyWithoutUserInput, { nullable: true })
  identities?: IdentityUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field((_type) => ValueUpdateManyWithoutUserInput, { nullable: true })
  values?: ValueUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field((_type) => MantraUpdateManyWithoutUserInput, { nullable: true })
  mantras?: MantraUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field((_type) => HabitUpdateManyWithoutUserInput, { nullable: true })
  habits?: HabitUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field((_type) => TaskUpdateManyWithoutUserInput, { nullable: true })
  tasks?: TaskUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field((_type) => DashboardUpdateManyWithoutUserInput, { nullable: true })
  dashboards?: DashboardUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field((_type) => NotebookUpdateManyWithoutOwnerInput, { nullable: true })
  notebooks?: NotebookUpdateManyWithoutOwnerInput | undefined;

  @TypeGraphQL.Field((_type) => NotebookUserPermissionUpdateManyWithoutUserInput, {
    nullable: true,
  })
  notebookPermissions?: NotebookUserPermissionUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field((_type) => ListUpdateManyWithoutOwnerInput, { nullable: true })
  lists?: ListUpdateManyWithoutOwnerInput | undefined;

  @TypeGraphQL.Field((_type) => ReadingUpdateManyWithoutUserInput, { nullable: true })
  readings?: ReadingUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field((_type) => BookshelfUpdateManyWithoutOwnerInput, { nullable: true })
  bookshelves?: BookshelfUpdateManyWithoutOwnerInput | undefined;

  @TypeGraphQL.Field((_type) => BookReviewUpdateManyWithoutUserInput, { nullable: true })
  bookReviews?: BookReviewUpdateManyWithoutUserInput | undefined;
}
