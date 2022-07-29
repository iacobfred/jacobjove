import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitCreateWithoutUserInput } from "../inputs/HabitCreateWithoutUserInput";
import { HabitWhereUniqueInput } from "../inputs/HabitWhereUniqueInput";

@TypeGraphQL.InputType("HabitCreateOrConnectWithoutUserInput", {
  isAbstract: true,
})
export class HabitCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field((_type) => HabitWhereUniqueInput, { nullable: false })
  where!: HabitWhereUniqueInput;

  @TypeGraphQL.Field((_type) => HabitCreateWithoutUserInput, { nullable: false })
  create!: HabitCreateWithoutUserInput;
}
