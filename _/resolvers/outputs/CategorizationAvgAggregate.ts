import { ObjectIdScalar } from "@/graphql/schema/scalars";
import { ObjectId } from "mongodb";
import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("CategorizationAvgAggregate", { isAbstract: true })
export class CategorizationAvgAggregate {
  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: true })
  _id!: ObjectId | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Float, { nullable: true })
  categoryId!: number | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Float, { nullable: true })
  actId!: number | null;
}
