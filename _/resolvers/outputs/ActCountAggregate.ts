import { ObjectIdScalar } from "@/graphql/schema/scalars";
import { ObjectId } from "mongodb";
import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("ActCountAggregate", { isAbstract: true })
export class ActCountAggregate {
  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: false })
  _id!: ObjectId;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  name!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  slug!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  description!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  public!: number;

  @TypeGraphQL.Field(() => String, { nullable: false })
  parentId!: string;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  createdAt!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  updatedAt!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  archivedAt!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  _all!: number;
}
