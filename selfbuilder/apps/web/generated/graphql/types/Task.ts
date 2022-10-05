/* Do not edit this file. It was generated programmatically. */

import { DateTimeScalar, Int, ObjectIdScalar } from "@web/graphql/schema/scalars";
import { Model } from "@web/graphql/schema/types";
import { Field, ObjectType } from "type-graphql-v2-fork";

@ObjectType()
export class Task extends Model {
  // `nullable` in TypeGraphQL actually refers to whether the input is optional.
  // https://typegraphql.com/docs/0.17.2/types-and-fields.html
  @Field(() => String, { nullable: false })
  title!: string;

  // `nullable` in TypeGraphQL actually refers to whether the input is optional.
  // https://typegraphql.com/docs/0.17.2/types-and-fields.html
  @Field(() => String, { nullable: true })
  description?: string | null;

  // `nullable` in TypeGraphQL actually refers to whether the input is optional.
  // https://typegraphql.com/docs/0.17.2/types-and-fields.html
  @Field(() => DateTimeScalar, { nullable: true })
  plannedStartDate?: Date | null;

  // `nullable` in TypeGraphQL actually refers to whether the input is optional.
  // https://typegraphql.com/docs/0.17.2/types-and-fields.html
  @Field(() => DateTimeScalar, { nullable: true })
  dueDate?: Date | null;

  // `nullable` in TypeGraphQL actually refers to whether the input is optional.
  // https://typegraphql.com/docs/0.17.2/types-and-fields.html
  @Field(() => ObjectIdScalar, { nullable: false })
  userId!: string;

  // `nullable` in TypeGraphQL actually refers to whether the input is optional.
  // https://typegraphql.com/docs/0.17.2/types-and-fields.html
  @Field(() => ObjectIdScalar, { nullable: true })
  parentId?: string | null;

  // `nullable` in TypeGraphQL actually refers to whether the input is optional.
  // https://typegraphql.com/docs/0.17.2/types-and-fields.html
  @Field(() => ObjectIdScalar, { nullable: true })
  habitId?: string | null;

  // `nullable` in TypeGraphQL actually refers to whether the input is optional.
  // https://typegraphql.com/docs/0.17.2/types-and-fields.html
  @Field(() => Int, { nullable: true })
  expectedDuration?: number | null;

  // `nullable` in TypeGraphQL actually refers to whether the input is optional.
  // https://typegraphql.com/docs/0.17.2/types-and-fields.html
  @Field(() => Int, { nullable: false })
  rank!: number;

  // `nullable` in TypeGraphQL actually refers to whether the input is optional.
  // https://typegraphql.com/docs/0.17.2/types-and-fields.html
  @Field(() => DateTimeScalar, { nullable: true })
  completedAt?: Date | null;
}

export default Task;
