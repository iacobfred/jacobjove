import { ApolloContext } from "@/graphql/context";
import { RoutineCrudResolver } from "@/graphql/schema/resolvers/crud/Routine/RoutineCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Routine } from "../../../models/Routine";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { UpdateManyRoutineArgs } from "./args/UpdateManyRoutineArgs";

@TypeGraphQL.Resolver((_of) => Routine)
export class UpdateManyRoutineResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyRoutine(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyRoutineArgs
  ): Promise<AffectedRowsOutput> {
    return RoutineCrudResolver.prototype.updateManyRoutine(ctx, info, args);
  }
}
