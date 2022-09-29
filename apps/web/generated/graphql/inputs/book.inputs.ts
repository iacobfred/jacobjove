/* Do not edit this file. It was generated programmatically. */

import { DateTimeScalar, Int, ObjectIdScalar } from "@web/graphql/schema/scalars";
import { ID, WhereInput, WhereUniqueInput } from "@web/graphql/schema/types";
import { Field, InputType } from "type-graphql-v2-fork";

@InputType()
export class BookCreationInput {
  @Field(() => String, { nullable: true })
  isbn?: string | null | undefined;

  @Field(() => String, { nullable: true })
  isbn13?: string | null | undefined;

  @Field(() => String, { nullable: false })
  title!: string;

  @Field(() => String, { nullable: false })
  slug!: string;

  @Field(() => String, { nullable: true })
  description?: string | null | undefined;

  @Field(() => [String], { nullable: false })
  authorNames!: string[];

  @Field(() => [String], { nullable: false })
  authorNamesLf!: string[];

  @Field(() => Int, { nullable: true })
  publicationYear?: number | null | undefined;

  @Field(() => Int, { nullable: true })
  originalPublicationYear?: number | null | undefined;

  @Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;
}

@InputType()
export class BookUpdateInput {
  @Field(() => String, { nullable: true })
  isbn?: string | null | undefined;

  @Field(() => String, { nullable: true })
  isbn13?: string | null | undefined;

  @Field(() => String, { nullable: true })
  title?: string | undefined;

  @Field(() => String, { nullable: true })
  slug?: string | undefined;

  @Field(() => String, { nullable: true })
  description?: string | null | undefined;

  @Field(() => [String], { nullable: true })
  authorNames?: string[] | undefined;

  @Field(() => [String], { nullable: true })
  authorNamesLf?: string[] | undefined;

  @Field(() => Int, { nullable: true })
  publicationYear?: number | null | undefined;

  @Field(() => Int, { nullable: true })
  originalPublicationYear?: number | null | undefined;

  @Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;
}

@InputType()
export class BookWhereInput extends WhereInput {
  @Field(() => ObjectIdScalar, { nullable: true })
  id?: ID | undefined;

  @Field(() => String, { nullable: true })
  isbn?: string | undefined;

  @Field(() => String, { nullable: true })
  isbn13?: string | undefined;

  @Field(() => String, { nullable: true })
  title?: string | null | undefined;

  @Field(() => String, { nullable: true })
  slug?: string | null | undefined;

  @Field(() => String, { nullable: true })
  description?: string | undefined;

  @Field(() => [String], { nullable: true })
  authorNames?: string[] | null | undefined;

  @Field(() => [String], { nullable: true })
  authorNamesLf?: string[] | null | undefined;

  @Field(() => Int, { nullable: true })
  publicationYear?: number | undefined;

  @Field(() => Int, { nullable: true })
  originalPublicationYear?: number | undefined;
}

@InputType()
export class BookWhereUniqueInput extends WhereUniqueInput {
  // @Field(() => ObjectIdScalar, { nullable: false })
  // id!: ID;
}
