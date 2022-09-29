/* Do not edit this file. It was generated programmatically. */

import { Field } from "@common/definition";
import { ListItemFragment } from "@web/generated/graphql/fragments/listItem.fragment";

type FieldKey = Exclude<
  Extract<keyof ListItemFragment, string>,
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
  listId: {
    label: "listId",
    type: "ID",
    ref: "List",
    required: true,
    widget: {},
  },
  data: {
    label: "data",
    type: "Map",
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
