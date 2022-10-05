/* Do not edit this file. It was generated programmatically. */

import { gql } from "@apollo/client";
import Book from "@web/generated/graphql/types/Book";
import { Fragment } from "@web/graphql/schema/types";

export const bookFragment = gql`
  fragment BookFragment on Book {
    __typename
    id
    isbn
    isbn13
    title
    slug
    description
    authorNames
    authorNamesLf
    publicationYear
    originalPublicationYear
    createdAt
    updatedAt
    archivedAt
  }
`;

export type BookFragment = NoUndefinedField<
  Pick<
    Fragment<Book>,
    | "__typename"
    | "id"
    | "createdAt"
    | "updatedAt"
    | "archivedAt"
    | "isbn"
    | "isbn13"
    | "title"
    | "slug"
    | "description"
    | "authorNames"
    | "authorNamesLf"
    | "publicationYear"
    | "originalPublicationYear"
  >
>;
