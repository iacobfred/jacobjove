import * as TypeGraphQL from "type-graphql-v2-fork";
import { AccountWhereInput } from "../inputs/AccountWhereInput";

@TypeGraphQL.InputType("AccountListRelationFilter", {
  isAbstract: true,
})
export class AccountListRelationFilter {
  @TypeGraphQL.Field((_type) => AccountWhereInput, { nullable: true })
  every?: AccountWhereInput | undefined;

  @TypeGraphQL.Field((_type) => AccountWhereInput, { nullable: true })
  some?: AccountWhereInput | undefined;

  @TypeGraphQL.Field((_type) => AccountWhereInput, { nullable: true })
  none?: AccountWhereInput | undefined;
}
