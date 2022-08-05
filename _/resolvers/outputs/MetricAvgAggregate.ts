import { ObjectIdScalar } from "@/graphql/schema/scalars";
import { ObjectId } from "mongodb";
import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("MetricAvgAggregate", { isAbstract: true })
export class MetricAvgAggregate {
  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: true })
  _id!: ObjectId | null;
}
