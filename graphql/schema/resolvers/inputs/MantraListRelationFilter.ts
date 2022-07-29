import * as TypeGraphQL from "type-graphql-v2-fork";
import { MantraWhereInput } from "../inputs/MantraWhereInput";

@TypeGraphQL.InputType("MantraListRelationFilter", {
  isAbstract: true,
})
export class MantraListRelationFilter {
  @TypeGraphQL.Field((_type) => MantraWhereInput, { nullable: true })
  every?: MantraWhereInput | undefined;

  @TypeGraphQL.Field((_type) => MantraWhereInput, { nullable: true })
  some?: MantraWhereInput | undefined;

  @TypeGraphQL.Field((_type) => MantraWhereInput, { nullable: true })
  none?: MantraWhereInput | undefined;
}
