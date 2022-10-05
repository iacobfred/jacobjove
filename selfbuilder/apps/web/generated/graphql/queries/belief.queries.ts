/* Do not edit this file. It was generated programmatically. */

import { gql } from "@apollo/client";
import { beliefFragment } from "@web/generated/graphql/fragments/belief.fragment";

export const GET_BELIEF = gql`
  query GetBelief($where: BeliefWhereUniqueInput!) {
    belief(where: $where) {
      ...BeliefFragment
    }
  }
  ${beliefFragment}
`;

export const GET_BELIEFS = gql`
  query GetBeliefs {
    beliefs {
      ...BeliefFragment
    }
  }
  ${beliefFragment}
`;
