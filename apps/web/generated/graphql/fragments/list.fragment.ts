/* Do not edit this file. It was generated programmatically. */

import { gql } from "@apollo/client";
import List from "@web/generated/graphql/types/List";
import { Fragment } from "@web/graphql/schema/types";

export const listFragment = gql`
  fragment ListFragment on List {
    __typename
    id
    userId
    name
    description
    fields
    createdAt
    updatedAt
    archivedAt
  }
`;

export type ListFragment = NoUndefinedField<
  Pick<
    Fragment<List>,
    | "__typename"
    | "id"
    | "createdAt"
    | "updatedAt"
    | "archivedAt"
    | "userId"
    | "name"
    | "description"
    | "fields"
  >
>;
