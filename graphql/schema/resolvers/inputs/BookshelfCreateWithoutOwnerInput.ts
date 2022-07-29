import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { ShelvingCreateNestedManyWithoutShelfInput } from "../inputs/ShelvingCreateNestedManyWithoutShelfInput";

@TypeGraphQL.InputType("BookshelfCreateWithoutOwnerInput", {
  isAbstract: true,
})
export class BookshelfCreateWithoutOwnerInput {
  @TypeGraphQL.Field((_type) => String, { nullable: false })
  name!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  slug!: string;

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  isPublic?: boolean | undefined;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  description?: string | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field((_type) => ShelvingCreateNestedManyWithoutShelfInput, { nullable: true })
  shelvings?: ShelvingCreateNestedManyWithoutShelfInput | undefined;
}
