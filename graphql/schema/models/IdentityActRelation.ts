import * as TypeGraphQL from "type-graphql-v2-fork";
import { Act } from "../models/Act";
import { Identity } from "../models/Identity";
import { DateTimeScalar } from "../scalars";
import { Model } from "./model";

@TypeGraphQL.ObjectType("IdentityActRelation", {
  isAbstract: true,
})
export class IdentityActRelation extends Model {
  identity?: Identity;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  identityId!: string;

  action?: Act;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  actionId!: string;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null;
}
