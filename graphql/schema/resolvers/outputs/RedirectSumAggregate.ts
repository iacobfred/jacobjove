import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("RedirectSumAggregate", {
  isAbstract: true,
})
export class RedirectSumAggregate {
  @TypeGraphQL.Field((_type) => String, { nullable: true })
  id!: string | null;
}
