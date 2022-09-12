/* Do not edit this file. It was generated programmatically. */

import { gql, MutationHookOptions } from "@apollo/client";
import { beliefFragment, BeliefFragment } from "@web/graphql/generated/fragments/belief.fragment";
import { BeliefCreationArgs } from "@web/graphql/generated/args/belief.args";
import {
  BeliefCreationInput,
  BeliefUpdateInput,
} from "@web/graphql/generated/inputs/belief.inputs";

export const CREATE_BELIEF = gql`
  mutation CreateBelief($data: BeliefCreationInput!) {
    createBelief(data: $data) {
      ...BeliefFragment
    }
  }
  ${beliefFragment}
`;

export const getOptimisticResponseForBeliefCreation = (
  data: BeliefCreationInput
): { createBelief: BeliefFragment } => {
  const now = new Date();
  return {
    createBelief: {
      __typename: "Belief",
      id: "tmp-id",
      description: null,
      archivedAt: null,
      ...data,
      createdAt: now,
      updatedAt: now,
    },
  };
};

export const updateCacheAfterCreatingBelief: MutationHookOptions<
  { createBelief: BeliefFragment },
  BeliefCreationArgs
> = {
  update(cache, { data }) {
    const { createBelief } = data || {};
    if (createBelief) {
      const newBeliefRef = cache.writeFragment({
        data: createBelief,
        fragment: gql`
          fragment NewBelief on Belief {
            ...BeliefFragment
          }
          ${beliefFragment}
        `,
        fragmentName: "NewBelief",
      });
      cache.modify({
        id: `User:${createBelief.userId}`,
        fields: {
          beliefs(existingBeliefRefs = []) {
            return [...existingBeliefRefs, newBeliefRef];
          },
        },
      });
      cache.modify({
        fields: {
          beliefs(existingBeliefs = []) {
            return [...existingBeliefs, newBeliefRef];
          },
        },
      });
    }
  },
};

export const UPDATE_BELIEF = gql`
  mutation UpdateBelief($where: BeliefWhereUniqueInput!, $data: BeliefUpdateInput!) {
    updateBelief(where: $where, data: $data) {
      ...BeliefFragment
    }
  }
  ${beliefFragment}
`;

export const getOptimisticResponseForBeliefUpdate = (
  fragment: BeliefFragment,
  data: BeliefUpdateInput
) => {
  const now = new Date();
  return {
    updateBelief: {
      __typename: "Belief",
      ...fragment,
      ...data,
      updatedAt: now,
    },
  };
};

export const UPSERT_BELIEF = gql`
  mutation UpdateBelief($where: BeliefWhereUniqueInput!, $data: BeliefCreationInput!) {
    upsertBelief(where: $where, data: $data) {
      ...BeliefFragment
    }
  }
  ${beliefFragment}
`;

export const UPDATE_BELIEFS = gql`
  mutation UpdateBeliefs($where: BeliefWhereInput!, $data: BeliefUpdateInput!) {
    updateBeliefs(where: $where, data: $data) {
      ...BeliefFragment
    }
  }
  ${beliefFragment}
`;

export const UPDATE_BELIEFS_DISTINCTLY = gql`
  mutation UpdateBeliefsDistinctly($data: [BeliefUpdateInput!]!) {
    updateBeliefsDistinctly(data: $data) {
      ...BeliefFragment
    }
  }
  ${beliefFragment}
`;
