import { ApolloContext } from "@/graphql/context";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { getPrismaFromContext } from "../../../helpers";
import { Account } from "../../../models/Account";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateAccount } from "../../outputs/AggregateAccount";
import { AggregateAccountArgs } from "./args/AggregateAccountArgs";
import { CreateAccountArgs } from "./args/CreateAccountArgs";
import { CreateManyAccountArgs } from "./args/CreateManyAccountArgs";
import { DeleteAccountArgs } from "./args/DeleteAccountArgs";
import { DeleteManyAccountArgs } from "./args/DeleteManyAccountArgs";
import { FindFirstAccountArgs } from "./args/FindFirstAccountArgs";
import { FindManyAccountArgs } from "./args/FindManyAccountArgs";
import { FindUniqueAccountArgs } from "./args/FindUniqueAccountArgs";
import { UpdateAccountArgs } from "./args/UpdateAccountArgs";
import { UpdateManyAccountArgs } from "./args/UpdateManyAccountArgs";
import { UpsertAccountArgs } from "./args/UpsertAccountArgs";

@TypeGraphQL.Resolver((_of) => Account)
export class AccountCrudResolver {
  @TypeGraphQL.Query((_returns) => Account, { nullable: true })
  async account(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueAccountArgs
  ): Promise<Account | null> {
    return getPrismaFromContext(ctx).account.findUnique({ ...args });
  }

  @TypeGraphQL.Query((_returns) => Account, { nullable: true })
  async findFirstAccount(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstAccountArgs
  ): Promise<Account | null> {
    return getPrismaFromContext(ctx).account.findFirst({ ...args });
  }

  @TypeGraphQL.Query((_returns) => [Account], { nullable: false })
  async accounts(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyAccountArgs
  ): Promise<Account[]> {
    return getPrismaFromContext(ctx).account.findMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Account, { nullable: false })
  async createAccount(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateAccountArgs
  ): Promise<Account> {
    return getPrismaFromContext(ctx).account.create({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyAccount(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyAccountArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).account.createMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Account, { nullable: true })
  async deleteAccount(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteAccountArgs
  ): Promise<Account | null> {
    return getPrismaFromContext(ctx).account.delete({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Account, { nullable: true })
  async updateAccount(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateAccountArgs
  ): Promise<Account | null> {
    return getPrismaFromContext(ctx).account.update({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyAccount(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyAccountArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).account.deleteMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyAccount(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyAccountArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).account.updateMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Account, { nullable: false })
  async upsertAccount(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertAccountArgs
  ): Promise<Account> {
    return getPrismaFromContext(ctx).account.upsert({ ...args });
  }

  @TypeGraphQL.Query((_returns) => AggregateAccount, { nullable: false })
  async aggregateAccount(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateAccountArgs
  ): Promise<AggregateAccount> {
    return getPrismaFromContext(ctx).account.aggregate({
      ...args,
    });
  }
}
