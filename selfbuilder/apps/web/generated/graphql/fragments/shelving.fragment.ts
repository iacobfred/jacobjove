/* Do not edit this file. It was generated programmatically. */

import { gql } from "@apollo/client";
import Shelving from "@web/generated/graphql/types/Shelving";
import { Fragment } from "@web/graphql/schema/types";

export const shelvingFragment = gql`
  fragment ShelvingFragment on Shelving {
    __typename
    id
    bookId
    shelfId
    position
    rationale
    createdAt
    updatedAt
    archivedAt
  }
`;

export type ShelvingFragment = NoUndefinedField<
  Pick<
    Fragment<Shelving>,
    | "__typename"
    | "id"
    | "createdAt"
    | "updatedAt"
    | "archivedAt"
    | "bookId"
    | "shelfId"
    | "position"
    | "rationale"
  >
>;
