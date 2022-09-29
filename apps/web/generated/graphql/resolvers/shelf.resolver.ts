/* Do not edit this file. It was generated programmatically. */

import {
  FindManyShelfArgs,
  FindUniqueShelfArgs,
  ShelfCreationArgs,
  ShelfUpdateArgs,
  ShelfUpsertionArgs,
} from "@web/generated/graphql/args/shelf.args";
import Shelf from "@web/generated/graphql/types/Shelf";
import ShelfModel from "@web/generated/models/Shelf";
import {
  createShelf as _createShelf,
  findShelf as _findShelf,
  updateShelf as _updateShelf,
  upsertShelf as _upsertShelf,
} from "@web/generated/shortcuts/shelf.shortcuts";
import type { GqlContext } from "@web/graphql/context";
import { convertFilterForMongo } from "@web/graphql/schema/helpers";
import { ObjectIdScalar } from "@web/graphql/schema/scalars";
import type { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.Resolver(() => Shelf)
export class ShelfResolver {
  @TypeGraphQL.FieldResolver(() => ObjectIdScalar)
  id(@TypeGraphQL.Root() shelf: Shelf) {
    return shelf._id;
  }

  @TypeGraphQL.Query(() => Shelf, { nullable: true })
  async shelf(
    @TypeGraphQL.Ctx() _ctx: GqlContext,
    @TypeGraphQL.Info() _info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueShelfArgs
  ) {
    return await _findShelf(args);
  }

  @TypeGraphQL.Query(() => [Shelf], { nullable: false })
  async shelves(
    @TypeGraphQL.Ctx() _ctx: GqlContext,
    @TypeGraphQL.Info() _info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyShelfArgs
  ) {
    const filter = convertFilterForMongo(args.where);
    return await ShelfModel.find(filter ?? {});
  }

  @TypeGraphQL.Mutation(() => Shelf)
  async createShelf(
    @TypeGraphQL.Ctx() _ctx: GqlContext,
    @TypeGraphQL.Info() _info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: ShelfCreationArgs
  ) {
    return await _createShelf(args);
  }

  /*
  @TypeGraphQL.Mutation(() => [Shelf], { nullable: false })
  async createManyShelf(
    @TypeGraphQL.Ctx() _ctx: GqlContext,
    @TypeGraphQL.Info() _info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: ShelvesCreationArgs
  ): Promise<Shelf[]> {
    throw new Error("Not implemented");
  }
  */

  @TypeGraphQL.Mutation(() => Shelf)
  async updateShelf(
    @TypeGraphQL.Ctx() _ctx: GqlContext,
    @TypeGraphQL.Info() _info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: ShelfUpdateArgs
  ) {
    return await _updateShelf(args);
  }

  @TypeGraphQL.Mutation(() => Shelf)
  async upsertShelf(
    @TypeGraphQL.Ctx() _ctx: GqlContext,
    @TypeGraphQL.Info() _info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: ShelfUpsertionArgs
  ) {
    return await _upsertShelf(args);
  }

  /*
  @TypeGraphQL.Mutation(() => [Shelf], { nullable: false })
  async updateShelves(
    @TypeGraphQL.Ctx() _ctx: GqlContext,
    @TypeGraphQL.Info() _info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: ArgsForUpdatingManyShelves
  ) {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation(() => [Shelf], { nullable: false })
  async updateShelvesDistinctly(
    @TypeGraphQL.Ctx() _ctx: GqlContext,
    @TypeGraphQL.Info() _info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: ArgsForUpdatingManyShelves
  ) {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation(() => Shelf, { nullable: true })
  async deleteShelf(
    @TypeGraphQL.Ctx() _ctx: GqlContext,
    @TypeGraphQL.Info() _info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteShelfArgs
  ) {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation(() => [Shelf], { nullable: false })
  async deleteManyShelf(
    @TypeGraphQL.Ctx() _ctx: GqlContext,
    @TypeGraphQL.Info() _info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyShelfArgs
  ) {
    throw new Error("Not implemented");
  }
  */
}
