import { GqlContext } from "@/graphql/context";
import { Metric, MetricRecord, MetricUsage } from "@/graphql/schema/generated/models";
import { Habit } from "@/graphql/schema/generated/models/habit.model";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricUsageRecordsArgs } from "./args/MetricUsageRecordsArgs";

@TypeGraphQL.Resolver((_of) => MetricUsage)
export class MetricUsageRelationsResolver {
  @TypeGraphQL.FieldResolver(() => Metric, { nullable: false })
  async metric(
    @TypeGraphQL.Root() metricUsage: MetricUsage,
    @TypeGraphQL.Ctx() ctx: GqlContext
  ): Promise<Metric> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.FieldResolver(() => Habit, { nullable: false })
  async habit(
    @TypeGraphQL.Root() metricUsage: MetricUsage,
    @TypeGraphQL.Ctx() ctx: GqlContext
  ): Promise<Habit> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.FieldResolver(() => [MetricRecord], { nullable: false })
  async records(
    @TypeGraphQL.Root() metricUsage: MetricUsage,
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Args() args: MetricUsageRecordsArgs
  ): Promise<MetricRecord[]> {
    throw new Error("Not implemented");
  }
}
