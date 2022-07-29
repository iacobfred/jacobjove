import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";

@TypeGraphQL.ObjectType("BookMinAggregate", {
  isAbstract: true,
})
export class BookMinAggregate {
  @TypeGraphQL.Field((_type) => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  isbn!: string | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  isbn13!: string | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  title!: string | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  slug!: string | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  description!: string | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  publicationYear!: number | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  originalPublicationYear!: number | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  createdAt!: Date | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  updatedAt!: Date | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  archivedAt!: Date | null;
}
