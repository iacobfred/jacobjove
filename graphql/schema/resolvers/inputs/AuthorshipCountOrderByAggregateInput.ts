import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("AuthorshipCountOrderByAggregateInput", {
  isAbstract: true,
})
export class AuthorshipCountOrderByAggregateInput {
  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  authorId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  bookId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  position?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  archivedAt?: "asc" | "desc" | undefined;
}
