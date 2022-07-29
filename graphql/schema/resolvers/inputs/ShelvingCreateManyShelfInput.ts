import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";

@TypeGraphQL.InputType("ShelvingCreateManyShelfInput", {
  isAbstract: true,
})
export class ShelvingCreateManyShelfInput {
  @TypeGraphQL.Field((_type) => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  bookId!: string;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  position?: number | undefined;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  rationale?: string | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;
}
