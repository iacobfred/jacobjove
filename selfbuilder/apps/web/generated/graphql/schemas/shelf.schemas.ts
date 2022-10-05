/* Do not edit this file. It was generated programmatically. */

import { ShelfCreationInput, ShelfUpdateInput } from "@web/generated/graphql/inputs/shelf.inputs";
import { date, InferType, object, Schema, string } from "yup";

export const shelfCreationInputSchema: Schema<ShelfCreationInput> = object({
  ownerId: string().required(),
  archivedAt: date().nullable().optional(),
});

export const shelfUpdateInputSchema: Schema<ShelfUpdateInput> = object({
  ownerId: string().nonNullable().optional(),
  archivedAt: date().nullable().optional(),
});

export type ShelfCreationInputSchemaType = InferType<typeof shelfCreationInputSchema>;
export type ShelfUpdateInputSchemaType = InferType<typeof shelfUpdateInputSchema>;
