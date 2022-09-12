/* Do not edit this file. It was generated programmatically. */

import * as TypeGraphQL from "type-graphql-v2-fork";
import Shelving from "@web/graphql/generated/types/Shelving";
import ShelvingModel from "@web/graphql/generated/models/ShelvingModel";
import {
  ShelvingCreationArgs,
  ShelvingsCreationArgs,
  DeleteShelvingArgs,
  DeleteManyShelvingArgs,
  FindManyShelvingArgs,
  FindUniqueShelvingArgs,
  ShelvingUpdateArgs,
  ArgsForUpdatingManyShelvings,
  ShelvingUpsertionArgs,
} from "@web/graphql/generated/args/shelving.args";
import type { GqlContext } from "@web/graphql/context";
import type { GraphQLResolveInfo } from "graphql";
import { convertFilterForMongo } from "@web/graphql/schema/helpers";
import { ObjectIdScalar } from "@web/graphql/schema/scalars";
import {
  createShelving as _createShelving,
  upsertShelving as _upsertShelving,
} from "@web/graphql/generated/shortcuts/shelving.shortcuts";

@TypeGraphQL.Resolver(() => Shelving)
export class ShelvingResolver {
  @TypeGraphQL.FieldResolver(() => ObjectIdScalar)
  id(@TypeGraphQL.Root() shelving: Shelving) {
    return shelving._id;
  }

  @TypeGraphQL.Query(() => Shelving, { nullable: true })
  async shelving(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueShelvingArgs
  ): Promise<Shelving | null> {
    const filter = convertFilterForMongo(args.where);
    return ShelvingModel.findOne(filter);
  }

  @TypeGraphQL.Query(() => [Shelving], { nullable: false })
  async shelvings(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyShelvingArgs
  ): Promise<Shelving[]> {
    const filter = convertFilterForMongo(args.where);
    return ShelvingModel.find(filter ?? {});
  }

  @TypeGraphQL.Mutation(() => Shelving)
  async createShelving(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: ShelvingCreationArgs
  ) {
    const shelving = await _createShelving(args);
    return shelving;
  }

  @TypeGraphQL.Mutation(() => [Shelving], { nullable: false })
  async createManyShelving(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: ShelvingsCreationArgs
  ): Promise<Shelving[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation(() => Shelving)
  async updateShelving(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: ShelvingUpdateArgs
  ) {
    const filter = convertFilterForMongo(args.where);
    const shelving = await ShelvingModel.findOneAndUpdate(filter, args.data, {
      returnDocument: "after",
    });
    return shelving;
  }

  @TypeGraphQL.Mutation(() => Shelving)
  async upsertShelving(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: ShelvingUpsertionArgs
  ) {
    const filter = convertFilterForMongo(args.where);
    return _upsertShelving({ where: filter, data: args.data });
  }

  @TypeGraphQL.Mutation(() => [Shelving], { nullable: false })
  async updateShelvings(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: ArgsForUpdatingManyShelvings
  ): Promise<Shelving[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation(() => [Shelving], { nullable: false })
  async updateShelvingsDistinctly(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: ArgsForUpdatingManyShelvings
  ): Promise<Shelving[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation(() => Shelving, { nullable: true })
  async deleteShelving(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteShelvingArgs
  ): Promise<Shelving | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation(() => [Shelving], { nullable: false })
  async deleteManyShelving(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyShelvingArgs
  ): Promise<Shelving[]> {
    throw new Error("Not implemented");
  }
}
