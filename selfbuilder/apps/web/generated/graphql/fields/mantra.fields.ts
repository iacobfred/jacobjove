/* Do not edit this file. It was generated programmatically. */

import { Field } from "@common/definition";
import { MantraFragment } from "@web/generated/graphql/fragments/mantra.fragment";

type FieldKey = Exclude<
  Extract<keyof MantraFragment, string>,
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
  content: {
    label: "content",
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
