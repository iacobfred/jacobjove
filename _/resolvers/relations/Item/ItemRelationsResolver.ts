// import { getFirestoreDocDataFromSnapshot } from "../../../helpers";
import { GqlContext } from "@/graphql/context";
import { Item, List } from "@/graphql/schema/generated/models";
import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.Resolver((_of) => Item)
export class ItemRelationsResolver {
  @TypeGraphQL.FieldResolver(() => List, { nullable: false })
  async list(@TypeGraphQL.Root() item: Item, @TypeGraphQL.Ctx() ctx: GqlContext): Promise<List> {
    throw new Error("Not implemented");
  }
}
