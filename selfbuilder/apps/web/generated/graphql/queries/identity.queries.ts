/* Do not edit this file. It was generated programmatically. */

import { gql } from "@apollo/client";
import { identityFragment } from "@web/generated/graphql/fragments/identity.fragment";

export const GET_IDENTITY = gql`
  query GetIdentity($where: IdentityWhereUniqueInput!) {
    identity(where: $where) {
      ...IdentityFragment
    }
  }
  ${identityFragment}
`;

export const GET_IDENTITIES = gql`
  query GetIdentities {
    identitys {
      ...IdentityFragment
    }
  }
  ${identityFragment}
`;
