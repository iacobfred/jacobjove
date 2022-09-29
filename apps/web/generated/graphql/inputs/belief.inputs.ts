/* Do not edit this file. It was generated programmatically. */

import { DateTimeScalar, ObjectIdScalar } from "@web/graphql/schema/scalars";
import { ID, WhereInput, WhereUniqueInput } from "@web/graphql/schema/types";
import { Field, InputType } from "type-graphql-v2-fork";

@InputType()
export class BeliefCreationInput {
  @Field(() => ObjectIdScalar, { nullable: false })
  userId!: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: true })
  description?: string | null | undefined;

  @Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;
}

@InputType()
export class BeliefUpdateInput {
  @Field(() => ObjectIdScalar, { nullable: true })
  userId?: string | undefined;

  @Field(() => String, { nullable: true })
  name?: string | undefined;

  @Field(() => String, { nullable: true })
  description?: string | null | undefined;

  @Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;
}

@InputType()
export class BeliefWhereInput extends WhereInput {
  @Field(() => ObjectIdScalar, { nullable: true })
  id?: ID | undefined;

  @Field(() => ObjectIdScalar, { nullable: true })
  userId?: string | null | undefined;

  @Field(() => String, { nullable: true })
  name?: string | null | undefined;

  @Field(() => String, { nullable: true })
  description?: string | undefined;
}

@InputType()
export class BeliefWhereUniqueInput extends WhereUniqueInput {
  // @Field(() => ObjectIdScalar, { nullable: false })
  // id!: ID;
}
