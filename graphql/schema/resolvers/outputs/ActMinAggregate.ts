import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";

@TypeGraphQL.ObjectType("ActMinAggregate", {
  isAbstract: true,
})
export class ActMinAggregate {
  @TypeGraphQL.Field((_type) => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  name!: string | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  slug!: string | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  description!: string | null;

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  isPublic!: boolean | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  parentId!: string | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  createdAt!: Date | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  updatedAt!: Date | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  archivedAt!: Date | null;
}
