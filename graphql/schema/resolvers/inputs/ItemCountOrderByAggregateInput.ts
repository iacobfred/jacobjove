import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ItemCountOrderByAggregateInput", {
  isAbstract: true,
})
export class ItemCountOrderByAggregateInput {
  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  listId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  data?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  archivedAt?: "asc" | "desc" | undefined;
}
