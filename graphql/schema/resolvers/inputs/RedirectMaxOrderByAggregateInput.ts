import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("RedirectMaxOrderByAggregateInput", {
  isAbstract: true,
})
export class RedirectMaxOrderByAggregateInput {
  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  old_path?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  new_path?: "asc" | "desc" | undefined;
}
