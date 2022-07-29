import * as TypeGraphQL from "type-graphql-v2-fork";
import { BeliefCreateManyInput } from "../../../inputs/BeliefCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyBeliefArgs {
  @TypeGraphQL.Field((_type) => [BeliefCreateManyInput], { nullable: false })
  data!: BeliefCreateManyInput[];

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
