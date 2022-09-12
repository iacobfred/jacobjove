/* Do not edit this file. It was generated programmatically. */

import { object, string, date, InferType, SchemaOf } from "yup";
import {
  MantraCreationInput,
  MantraUpdateInput,
} from "@web/graphql/generated/inputs/mantra.inputs";

export const mantraCreationInputSchema: SchemaOf<MantraCreationInput> = object({
  userId: string().required(),
  content: string().required(),
  archivedAt: date().nullable().notRequired(),
});

export const mantraUpdateInputSchema: SchemaOf<MantraUpdateInput> = object({
  userId: string().notRequired(),
  content: string().notRequired(),
  archivedAt: date().nullable().notRequired(),
});

export type MantraCreationInputSchemaType = InferType<typeof mantraCreationInputSchema>;
export type MantraUpdateInputSchemaType = InferType<typeof mantraUpdateInputSchema>;
