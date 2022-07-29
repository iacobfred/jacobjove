import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("IdentityMaxOrderByAggregateInput", {
  isAbstract: true,
})
export class IdentityMaxOrderByAggregateInput {
  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  slug?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  description?: "asc" | "desc" | undefined;
}
