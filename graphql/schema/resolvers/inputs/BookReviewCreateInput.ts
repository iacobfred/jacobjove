import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { BookCreateNestedOneWithoutBookReviewInput } from "../inputs/BookCreateNestedOneWithoutBookReviewInput";
import { ReadingCreateNestedOneWithoutReviewInput } from "../inputs/ReadingCreateNestedOneWithoutReviewInput";
import { UserCreateNestedOneWithoutBookReviewsInput } from "../inputs/UserCreateNestedOneWithoutBookReviewsInput";

@TypeGraphQL.InputType("BookReviewCreateInput", {
  isAbstract: true,
})
export class BookReviewCreateInput {
  @TypeGraphQL.Field((_type) => String, { nullable: false })
  review!: string;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  rating!: number;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field((_type) => BookCreateNestedOneWithoutBookReviewInput, { nullable: false })
  book!: BookCreateNestedOneWithoutBookReviewInput;

  @TypeGraphQL.Field((_type) => UserCreateNestedOneWithoutBookReviewsInput, { nullable: false })
  user!: UserCreateNestedOneWithoutBookReviewsInput;

  @TypeGraphQL.Field((_type) => ReadingCreateNestedOneWithoutReviewInput, { nullable: true })
  reading?: ReadingCreateNestedOneWithoutReviewInput | undefined;
}
