/* Do not edit this file. It was generated programmatically. */

import { gql } from "@apollo/client";
import { taskFragment } from "@web/generated/graphql/fragments/task.fragment";

export const GET_TASK = gql`
  query GetTask($where: TaskWhereUniqueInput!) {
    task(where: $where) {
      ...TaskFragment
    }
  }
  ${taskFragment}
`;

export const GET_TASKS = gql`
  query GetTasks {
    tasks {
      ...TaskFragment
    }
  }
  ${taskFragment}
`;
