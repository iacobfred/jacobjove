/* Do not edit this file. It was generated programmatically. */

import { Field } from "@common/definition";
import { GoalFragment } from "@web/generated/graphql/fragments/goal.fragment";

type FieldKey = Exclude<
  Extract<keyof GoalFragment, string>,
  "id" | "_id" | "createdAt" | "updatedAt" | "__typename"
>;

const fields: Record<FieldKey, Field> = {
  userId: {
    label: "userId",
    type: "ID",
    ref: "User",
    required: true,
    widget: {},
  },
  habitId: {
    label: "habitId",
    type: "ID",
    ref: "Habit",
    required: false,
    widget: {},
  },
  parentId: {
    label: "parentId",
    type: "ID",
    ref: "Goal",
    required: false,
    widget: {},
  },
  description: {
    label: "description",
    type: "String",
    required: true,
    widget: {},
  },
  archivedAt: {
    label: "Archived at",
    type: "DateTime",
    required: false,
  },
};

export default fields;
