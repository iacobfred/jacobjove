import { ApolloContext } from "@/graphql/context";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { getPrismaFromContext } from "../../../helpers";
import { Dashboard } from "../../../models/Dashboard";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateDashboard } from "../../outputs/AggregateDashboard";
import { AggregateDashboardArgs } from "./args/AggregateDashboardArgs";
import { CreateDashboardArgs } from "./args/CreateDashboardArgs";
import { CreateManyDashboardArgs } from "./args/CreateManyDashboardArgs";
import { DeleteDashboardArgs } from "./args/DeleteDashboardArgs";
import { DeleteManyDashboardArgs } from "./args/DeleteManyDashboardArgs";
import { FindFirstDashboardArgs } from "./args/FindFirstDashboardArgs";
import { FindManyDashboardArgs } from "./args/FindManyDashboardArgs";
import { FindUniqueDashboardArgs } from "./args/FindUniqueDashboardArgs";
import { UpdateDashboardArgs } from "./args/UpdateDashboardArgs";
import { UpdateManyDashboardArgs } from "./args/UpdateManyDashboardArgs";
import { UpsertDashboardArgs } from "./args/UpsertDashboardArgs";

@TypeGraphQL.Resolver((_of) => Dashboard)
export class DashboardCrudResolver {
  @TypeGraphQL.Query((_returns) => Dashboard, { nullable: true })
  async dashboard(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueDashboardArgs
  ): Promise<Dashboard | null> {
    return getPrismaFromContext(ctx).dashboard.findUnique({ ...args });
  }

  @TypeGraphQL.Query((_returns) => Dashboard, { nullable: true })
  async findFirstDashboard(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstDashboardArgs
  ): Promise<Dashboard | null> {
    return getPrismaFromContext(ctx).dashboard.findFirst({ ...args });
  }

  @TypeGraphQL.Query((_returns) => [Dashboard], { nullable: false })
  async dashboards(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyDashboardArgs
  ): Promise<Dashboard[]> {
    return getPrismaFromContext(ctx).dashboard.findMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Dashboard, { nullable: false })
  async createDashboard(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateDashboardArgs
  ): Promise<Dashboard> {
    return getPrismaFromContext(ctx).dashboard.create({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyDashboard(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyDashboardArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).dashboard.createMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Dashboard, { nullable: true })
  async deleteDashboard(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteDashboardArgs
  ): Promise<Dashboard | null> {
    return getPrismaFromContext(ctx).dashboard.delete({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Dashboard, { nullable: true })
  async updateDashboard(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateDashboardArgs
  ): Promise<Dashboard | null> {
    return getPrismaFromContext(ctx).dashboard.update({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyDashboard(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyDashboardArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).dashboard.deleteMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyDashboard(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyDashboardArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).dashboard.updateMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Dashboard, { nullable: false })
  async upsertDashboard(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertDashboardArgs
  ): Promise<Dashboard> {
    return getPrismaFromContext(ctx).dashboard.upsert({ ...args });
  }

  @TypeGraphQL.Query((_returns) => AggregateDashboard, { nullable: false })
  async aggregateDashboard(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateDashboardArgs
  ): Promise<AggregateDashboard> {
    return getPrismaFromContext(ctx).dashboard.aggregate({
      ...args,
    });
  }
}
