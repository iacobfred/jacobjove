import * as TypeGraphQL from "type-graphql-v2-fork";
import { Categorization } from "../models/Categorization";
import { CategoryCount } from "../resolvers/outputs/CategoryCount";
import { DateTimeScalar } from "../scalars";
import { Model } from "./model";

@TypeGraphQL.ObjectType("Category", {
  isAbstract: true,
})
export class Category extends Model {
  @TypeGraphQL.Field((_type) => String, { nullable: false })
  name!: string;

  categorizations?: Categorization[];

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null;

  @TypeGraphQL.Field((_type) => CategoryCount, { nullable: true })
  _count?: CategoryCount | null;
}
