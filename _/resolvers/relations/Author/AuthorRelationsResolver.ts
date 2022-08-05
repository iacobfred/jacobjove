import { GqlContext } from "@/graphql/context";
import { Authorship } from "@/graphql/schema/generated/models";
import { Author } from "@/graphql/schema/generated/models/author.model";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { AuthorAuthorshipsArgs } from "./args/AuthorAuthorshipsArgs";

@TypeGraphQL.Resolver((_of) => Author)
export class AuthorRelationsResolver {
  @TypeGraphQL.FieldResolver(() => [Authorship], { nullable: false })
  async authorships(
    @TypeGraphQL.Root() author: Author,
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Args() args: AuthorAuthorshipsArgs
  ): Promise<Authorship[]> {
    throw new Error("Not implemented");
  }
}
