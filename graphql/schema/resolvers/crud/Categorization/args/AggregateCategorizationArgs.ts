import * as TypeGraphQL from "type-graphql-v2-fork";
import { CategorizationOrderByWithRelationInput } from "../../../inputs/CategorizationOrderByWithRelationInput";
import { CategorizationWhereInput } from "../../../inputs/CategorizationWhereInput";
import { CategorizationWhereUniqueInput } from "../../../inputs/CategorizationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCategorizationArgs {
  @TypeGraphQL.Field((_type) => CategorizationWhereInput, { nullable: true })
  where?: CategorizationWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [CategorizationOrderByWithRelationInput], { nullable: true })
  orderBy?: CategorizationOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => CategorizationWhereUniqueInput, { nullable: true })
  cursor?: CategorizationWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}
