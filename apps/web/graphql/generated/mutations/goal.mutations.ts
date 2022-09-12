/* Do not edit this file. It was generated programmatically. */

import { gql, MutationHookOptions } from "@apollo/client";
import { goalFragment, GoalFragment } from "@web/graphql/generated/fragments/goal.fragment";
import { GoalCreationArgs } from "@web/graphql/generated/args/goal.args";
import { GoalCreationInput, GoalUpdateInput } from "@web/graphql/generated/inputs/goal.inputs";

export const CREATE_GOAL = gql`
  mutation CreateGoal($data: GoalCreationInput!) {
    createGoal(data: $data) {
      ...GoalFragment
    }
  }
  ${goalFragment}
`;

export const getOptimisticResponseForGoalCreation = (
  data: GoalCreationInput
): { createGoal: GoalFragment } => {
  const now = new Date();
  return {
    createGoal: {
      __typename: "Goal",
      id: "tmp-id",
      habitId: null,
      parentId: null,
      archivedAt: null,
      ...data,
      createdAt: now,
      updatedAt: now,
    },
  };
};

export const updateCacheAfterCreatingGoal: MutationHookOptions<
  { createGoal: GoalFragment },
  GoalCreationArgs
> = {
  update(cache, { data }) {
    const { createGoal } = data || {};
    if (createGoal) {
      const newGoalRef = cache.writeFragment({
        data: createGoal,
        fragment: gql`
          fragment NewGoal on Goal {
            ...GoalFragment
          }
          ${goalFragment}
        `,
        fragmentName: "NewGoal",
      });
      cache.modify({
        id: `User:${createGoal.userId}`,
        fields: {
          goals(existingGoalRefs = []) {
            return [...existingGoalRefs, newGoalRef];
          },
        },
      });
      cache.modify({
        fields: {
          goals(existingGoals = []) {
            return [...existingGoals, newGoalRef];
          },
        },
      });
    }
  },
};

export const UPDATE_GOAL = gql`
  mutation UpdateGoal($where: GoalWhereUniqueInput!, $data: GoalUpdateInput!) {
    updateGoal(where: $where, data: $data) {
      ...GoalFragment
    }
  }
  ${goalFragment}
`;

export const getOptimisticResponseForGoalUpdate = (
  fragment: GoalFragment,
  data: GoalUpdateInput
) => {
  const now = new Date();
  return {
    updateGoal: {
      __typename: "Goal",
      ...fragment,
      ...data,
      updatedAt: now,
    },
  };
};

export const UPSERT_GOAL = gql`
  mutation UpdateGoal($where: GoalWhereUniqueInput!, $data: GoalCreationInput!) {
    upsertGoal(where: $where, data: $data) {
      ...GoalFragment
    }
  }
  ${goalFragment}
`;

export const UPDATE_GOALS = gql`
  mutation UpdateGoals($where: GoalWhereInput!, $data: GoalUpdateInput!) {
    updateGoals(where: $where, data: $data) {
      ...GoalFragment
    }
  }
  ${goalFragment}
`;

export const UPDATE_GOALS_DISTINCTLY = gql`
  mutation UpdateGoalsDistinctly($data: [GoalUpdateInput!]!) {
    updateGoalsDistinctly(data: $data) {
      ...GoalFragment
    }
  }
  ${goalFragment}
`;
