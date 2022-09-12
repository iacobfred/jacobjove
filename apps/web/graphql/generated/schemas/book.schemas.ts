/* Do not edit this file. It was generated programmatically. */

import { object, string, number, date, array, InferType, SchemaOf } from "yup";
import { BookCreationInput, BookUpdateInput } from "@web/graphql/generated/inputs/book.inputs";

export const bookCreationInputSchema: SchemaOf<BookCreationInput> = object({
  isbn: string().nullable().notRequired(),
  isbn13: string().nullable().notRequired(),
  title: string().required(),
  slug: string().required(),
  description: string().nullable().notRequired(),
  authorNames: array().of(string().required()).required(),
  authorNamesLf: array().of(string().required()).required(),
  publicationYear: number().nullable().notRequired(),
  originalPublicationYear: number().nullable().notRequired(),
  archivedAt: date().nullable().notRequired(),
});

export const bookUpdateInputSchema: SchemaOf<BookUpdateInput> = object({
  isbn: string().nullable().notRequired(),
  isbn13: string().nullable().notRequired(),
  title: string().notRequired(),
  slug: string().notRequired(),
  description: string().nullable().notRequired(),
  authorNames: array().of(string()).notRequired(),
  authorNamesLf: array().of(string()).notRequired(),
  publicationYear: number().nullable().notRequired(),
  originalPublicationYear: number().nullable().notRequired(),
  archivedAt: date().nullable().notRequired(),
});

export type BookCreationInputSchemaType = InferType<typeof bookCreationInputSchema>;
export type BookUpdateInputSchemaType = InferType<typeof bookUpdateInputSchema>;
