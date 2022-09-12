/* Do not edit this file. It was generated programmatically. */

import { object, string, date, InferType, SchemaOf } from "yup";
import { ListCreationInput, ListUpdateInput } from "@web/graphql/generated/inputs/list.inputs";

export const listCreationInputSchema: SchemaOf<ListCreationInput> = object({
  userId: string().required(),
  name: string().required(),
  description: string().nullable().notRequired(),
  fields: object(),
  archivedAt: date().nullable().notRequired(),
});

export const listUpdateInputSchema: SchemaOf<ListUpdateInput> = object({
  userId: string().notRequired(),
  name: string().notRequired(),
  description: string().nullable().notRequired(),
  fields: object().notRequired(),
  archivedAt: date().nullable().notRequired(),
});

export type ListCreationInputSchemaType = InferType<typeof listCreationInputSchema>;
export type ListUpdateInputSchemaType = InferType<typeof listUpdateInputSchema>;
