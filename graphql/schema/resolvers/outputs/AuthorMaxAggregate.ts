import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";

@TypeGraphQL.ObjectType("AuthorMaxAggregate", {
  isAbstract: true,
})
export class AuthorMaxAggregate {
  @TypeGraphQL.Field((_type) => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  name!: string | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  slug!: string | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  createdAt!: Date | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  updatedAt!: Date | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  archivedAt!: Date | null;
}
