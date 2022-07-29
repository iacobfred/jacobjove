import * as TypeGraphQL from "type-graphql-v2-fork";

export enum ReadingScalarFieldEnum {
  id = "id",
  userId = "userId",
  bookId = "bookId",
  dateStarted = "dateStarted",
  dateFinished = "dateFinished",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  archivedAt = "archivedAt",
}
TypeGraphQL.registerEnumType(ReadingScalarFieldEnum, {
  name: "ReadingScalarFieldEnum",
  description: undefined,
});
