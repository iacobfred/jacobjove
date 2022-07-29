import { ApolloContext } from "@/graphql/context";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { getPrismaFromContext } from "../../../helpers";
import { ScheduleTemplate } from "../../../models/ScheduleTemplate";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateScheduleTemplate } from "../../outputs/AggregateScheduleTemplate";
import { AggregateScheduleTemplateArgs } from "./args/AggregateScheduleTemplateArgs";
import { CreateManyScheduleTemplateArgs } from "./args/CreateManyScheduleTemplateArgs";
import { CreateScheduleTemplateArgs } from "./args/CreateScheduleTemplateArgs";
import { DeleteManyScheduleTemplateArgs } from "./args/DeleteManyScheduleTemplateArgs";
import { DeleteScheduleTemplateArgs } from "./args/DeleteScheduleTemplateArgs";
import { FindFirstScheduleTemplateArgs } from "./args/FindFirstScheduleTemplateArgs";
import { FindManyScheduleTemplateArgs } from "./args/FindManyScheduleTemplateArgs";
import { FindUniqueScheduleTemplateArgs } from "./args/FindUniqueScheduleTemplateArgs";
import { UpdateManyScheduleTemplateArgs } from "./args/UpdateManyScheduleTemplateArgs";
import { UpdateScheduleTemplateArgs } from "./args/UpdateScheduleTemplateArgs";
import { UpsertScheduleTemplateArgs } from "./args/UpsertScheduleTemplateArgs";

@TypeGraphQL.Resolver((_of) => ScheduleTemplate)
export class ScheduleTemplateCrudResolver {
  @TypeGraphQL.Query((_returns) => ScheduleTemplate, { nullable: true })
  async scheduleTemplate(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueScheduleTemplateArgs
  ): Promise<ScheduleTemplate | null> {
    return getPrismaFromContext(ctx).scheduleTemplate.findUnique({ ...args });
  }

  @TypeGraphQL.Query((_returns) => ScheduleTemplate, { nullable: true })
  async findFirstScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstScheduleTemplateArgs
  ): Promise<ScheduleTemplate | null> {
    return getPrismaFromContext(ctx).scheduleTemplate.findFirst({ ...args });
  }

  @TypeGraphQL.Query((_returns) => [ScheduleTemplate], { nullable: false })
  async scheduleTemplates(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyScheduleTemplateArgs
  ): Promise<ScheduleTemplate[]> {
    return getPrismaFromContext(ctx).scheduleTemplate.findMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => ScheduleTemplate, { nullable: false })
  async createScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateScheduleTemplateArgs
  ): Promise<ScheduleTemplate> {
    return getPrismaFromContext(ctx).scheduleTemplate.create({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyScheduleTemplateArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).scheduleTemplate.createMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => ScheduleTemplate, { nullable: true })
  async deleteScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteScheduleTemplateArgs
  ): Promise<ScheduleTemplate | null> {
    return getPrismaFromContext(ctx).scheduleTemplate.delete({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => ScheduleTemplate, { nullable: true })
  async updateScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateScheduleTemplateArgs
  ): Promise<ScheduleTemplate | null> {
    return getPrismaFromContext(ctx).scheduleTemplate.update({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyScheduleTemplateArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).scheduleTemplate.deleteMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyScheduleTemplateArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).scheduleTemplate.updateMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => ScheduleTemplate, { nullable: false })
  async upsertScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertScheduleTemplateArgs
  ): Promise<ScheduleTemplate> {
    return getPrismaFromContext(ctx).scheduleTemplate.upsert({ ...args });
  }

  @TypeGraphQL.Query((_returns) => AggregateScheduleTemplate, { nullable: false })
  async aggregateScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateScheduleTemplateArgs
  ): Promise<AggregateScheduleTemplate> {
    return getPrismaFromContext(ctx).scheduleTemplate.aggregate({
      ...args,
    });
  }
}
