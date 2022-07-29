import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";

@TypeGraphQL.ObjectType("DashboardMaxAggregate", {
  isAbstract: true,
})
export class DashboardMaxAggregate {
  @TypeGraphQL.Field((_type) => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  name!: string | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  userId!: string | null;

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  isDefault!: boolean | null;

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  isPublic!: boolean | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  createdAt!: Date | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  updatedAt!: Date | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  archivedAt!: Date | null;
}
