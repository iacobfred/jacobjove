import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActUpdateWithoutParentInput } from "../inputs/ActUpdateWithoutParentInput";
import { ActWhereUniqueInput } from "../inputs/ActWhereUniqueInput";

@TypeGraphQL.InputType("ActUpdateWithWhereUniqueWithoutParentInput", {
  isAbstract: true,
})
export class ActUpdateWithWhereUniqueWithoutParentInput {
  @TypeGraphQL.Field((_type) => ActWhereUniqueInput, { nullable: false })
  where!: ActWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ActUpdateWithoutParentInput, { nullable: false })
  data!: ActUpdateWithoutParentInput;
}
