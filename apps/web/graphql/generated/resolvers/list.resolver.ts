/* Do not edit this file. It was generated programmatically. */

import * as TypeGraphQL from "type-graphql-v2-fork";
import List from "@web/graphql/generated/types/List";
import ListModel from "@web/graphql/generated/models/ListModel";
import {
  ListCreationArgs,
  ListsCreationArgs,
  DeleteListArgs,
  DeleteManyListArgs,
  FindManyListArgs,
  FindUniqueListArgs,
  ListUpdateArgs,
  ArgsForUpdatingManyLists,
  ListUpsertionArgs,
} from "@web/graphql/generated/args/list.args";
import type { GqlContext } from "@web/graphql/context";
import type { GraphQLResolveInfo } from "graphql";
import { convertFilterForMongo } from "@web/graphql/schema/helpers";
import { ObjectIdScalar } from "@web/graphql/schema/scalars";
import {
  createList as _createList,
  upsertList as _upsertList,
} from "@web/graphql/generated/shortcuts/list.shortcuts";
import UserModel from "@web/graphql/generated/models/UserModel";

@TypeGraphQL.Resolver(() => List)
export class ListResolver {
  @TypeGraphQL.FieldResolver(() => ObjectIdScalar)
  id(@TypeGraphQL.Root() list: List) {
    return list._id;
  }

  @TypeGraphQL.Query(() => List, { nullable: true })
  async list(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueListArgs
  ): Promise<List | null> {
    const filter = convertFilterForMongo(args.where);
    return ListModel.findOne(filter);
  }

  @TypeGraphQL.Query(() => [List], { nullable: false })
  async lists(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyListArgs
  ): Promise<List[]> {
    const filter = convertFilterForMongo(args.where);
    return ListModel.find(filter ?? {});
  }

  @TypeGraphQL.Mutation(() => List)
  async createList(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: ListCreationArgs
  ) {
    const list = await _createList(args);
    if (list) {
      // NOTE: This update fails if it's not awaited.
      await UserModel.findOneAndUpdate({ _id: list.userId }, { $push: { lists: { ...list } } });
    }
    return list;
  }

  @TypeGraphQL.Mutation(() => [List], { nullable: false })
  async createManyList(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: ListsCreationArgs
  ): Promise<List[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation(() => List)
  async updateList(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: ListUpdateArgs
  ) {
    const filter = convertFilterForMongo(args.where);
    const list = await ListModel.findOneAndUpdate(filter, args.data, { returnDocument: "after" });
    // NOTE: This update fails if it's not awaited.
    list &&
      (await UserModel.findOneAndUpdate(
        { _id: list.userId, "lists._id": list._id },
        {
          $set: { "lists.$": { ...list } },
        }
      ));
    return list;
  }

  @TypeGraphQL.Mutation(() => List)
  async upsertList(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: ListUpsertionArgs
  ) {
    const filter = convertFilterForMongo(args.where);
    return _upsertList({ where: filter, data: args.data });
  }

  @TypeGraphQL.Mutation(() => [List], { nullable: false })
  async updateLists(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: ArgsForUpdatingManyLists
  ): Promise<List[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation(() => [List], { nullable: false })
  async updateListsDistinctly(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: ArgsForUpdatingManyLists
  ): Promise<List[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation(() => List, { nullable: true })
  async deleteList(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteListArgs
  ): Promise<List | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation(() => [List], { nullable: false })
  async deleteManyList(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyListArgs
  ): Promise<List[]> {
    throw new Error("Not implemented");
  }
}
