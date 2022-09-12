/* Do not edit this file. It was generated programmatically. */

import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar, ObjectIdScalar, JSONResolver } from "@web/graphql/schema/scalars";
import { ID, WhereInput, WhereUniqueInput } from "@web/graphql/schema/types";

@TypeGraphQL.InputType()
export class UserCreationInput {
  @TypeGraphQL.Field(() => String, { nullable: true })
  name?: string | null | undefined;

  @TypeGraphQL.Field(() => String, { nullable: false })
  email!: string;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  emailVerified?: boolean | null | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  image?: string | null | undefined;

  @TypeGraphQL.Field(() => Boolean, { nullable: false })
  isAdmin!: boolean;

  @TypeGraphQL.Field(() => JSONResolver, { nullable: false })
  settings!: Record<string, unknown>;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  lastLogin?: Date | null | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;
}

@TypeGraphQL.InputType()
export class UserUpdateInput {
  @TypeGraphQL.Field(() => String, { nullable: true })
  name?: string | null | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  email?: string | undefined;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  emailVerified?: boolean | null | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  image?: string | null | undefined;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  isAdmin?: boolean | undefined;

  @TypeGraphQL.Field(() => JSONResolver, { nullable: true })
  settings?: Record<string, unknown> | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  lastLogin?: Date | null | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;
}

@TypeGraphQL.InputType()
export class UserWhereInput extends WhereInput {
  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: true })
  id?: ID | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  name?: string | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  email?: string | null | undefined;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  emailVerified?: boolean | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  image?: string | undefined;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  isAdmin?: boolean | null | undefined;

  @TypeGraphQL.Field(() => JSONResolver, { nullable: true })
  settings?: Record<string, unknown> | null | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  lastLogin?: Date | undefined;
}

@TypeGraphQL.InputType()
export class UserWhereUniqueInput extends WhereUniqueInput {
  @TypeGraphQL.Field(() => String, { nullable: true })
  email?: string | null | undefined;
}
