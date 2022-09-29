/* Do not edit this file. It was generated programmatically. */

import { DateTimeScalar, JSONResolver, ObjectIdScalar } from "@web/graphql/schema/scalars";
import { ID, WhereInput, WhereUniqueInput } from "@web/graphql/schema/types";
import { Field, InputType } from "type-graphql-v2-fork";

@InputType()
export class ListItemCreationInput {
  @Field(() => ObjectIdScalar, { nullable: false })
  userId!: string;

  @Field(() => ObjectIdScalar, { nullable: false })
  listId!: string;

  @Field(() => JSONResolver, { nullable: false })
  data!: Record<string, unknown>;

  @Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;
}

@InputType()
export class ListItemUpdateInput {
  @Field(() => ObjectIdScalar, { nullable: true })
  userId?: string | undefined;

  @Field(() => ObjectIdScalar, { nullable: true })
  listId?: string | undefined;

  @Field(() => JSONResolver, { nullable: true })
  data?: Record<string, unknown> | undefined;

  @Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;
}

@InputType()
export class ListItemWhereInput extends WhereInput {
  @Field(() => ObjectIdScalar, { nullable: true })
  id?: ID | undefined;

  @Field(() => ObjectIdScalar, { nullable: true })
  userId?: string | null | undefined;

  @Field(() => ObjectIdScalar, { nullable: true })
  listId?: string | null | undefined;

  @Field(() => JSONResolver, { nullable: true })
  data?: Record<string, unknown> | null | undefined;
}

@InputType()
export class ListItemWhereUniqueInput extends WhereUniqueInput {
  // @Field(() => ObjectIdScalar, { nullable: false })
  // id!: ID;
}
