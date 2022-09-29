/* Do not edit this file. It was generated programmatically. */

import { gql } from "@apollo/client";
import Notebook from "@web/generated/graphql/types/Notebook";
import { Fragment } from "@web/graphql/schema/types";

export const notebookFragment = gql`
  fragment NotebookFragment on Notebook {
    __typename
    id
    userId
    title
    description
    public
    createdAt
    updatedAt
    archivedAt
  }
`;

export type NotebookFragment = NoUndefinedField<
  Pick<
    Fragment<Notebook>,
    | "__typename"
    | "id"
    | "createdAt"
    | "updatedAt"
    | "archivedAt"
    | "userId"
    | "title"
    | "description"
    | "public"
  >
>;
