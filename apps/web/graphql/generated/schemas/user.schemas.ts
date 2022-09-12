/* Do not edit this file. It was generated programmatically. */

import { object, string, date, bool, array, InferType, SchemaOf } from "yup";
import { UserCreationInput, UserUpdateInput } from "@web/graphql/generated/inputs/user.inputs";
import { accountCreationInputSchema } from "@web/graphql/generated/schemas/account.schemas";
import { calendarCreationInputSchema } from "@web/graphql/generated/schemas/calendar.schemas";
import { calendarEventCreationInputSchema } from "@web/graphql/generated/schemas/calendarEvent.schemas";
import { goalCreationInputSchema } from "@web/graphql/generated/schemas/goal.schemas";
import { habitCreationInputSchema } from "@web/graphql/generated/schemas/habit.schemas";
import { mantraCreationInputSchema } from "@web/graphql/generated/schemas/mantra.schemas";
import { notebookCreationInputSchema } from "@web/graphql/generated/schemas/notebook.schemas";
import { taskCreationInputSchema } from "@web/graphql/generated/schemas/task.schemas";

export const settingsSchema = object({
  colorMode: string().nullable().notRequired(),
  defaultCalendarId: string().nullable().notRequired(),
});

export const userCreationInputSchema: SchemaOf<UserCreationInput> = object({
  name: string().nullable().notRequired(),
  email: string().required(),
  emailVerified: bool().nullable().notRequired(),
  image: string().nullable().notRequired(),
  isAdmin: bool()
    .required()
    .default(() => {
      return false;
    }),
  settings: settingsSchema.default(() => {
    return {};
  }),
  lastLogin: date().nullable().notRequired(),
  accounts: array()
    .of(accountCreationInputSchema.required())
    .nullable()
    .notRequired()
    .default(() => {
      return [];
    }),
  calendars: array()
    .of(calendarCreationInputSchema.required())
    .nullable()
    .notRequired()
    .default(() => {
      return [];
    }),
  calendarEvents: array()
    .of(calendarEventCreationInputSchema.required())
    .nullable()
    .notRequired()
    .default(() => {
      return [];
    }),
  goals: array()
    .of(goalCreationInputSchema.required())
    .nullable()
    .notRequired()
    .default(() => {
      return [];
    }),
  habits: array()
    .of(habitCreationInputSchema.required())
    .nullable()
    .notRequired()
    .default(() => {
      return [];
    }),
  mantras: array()
    .of(mantraCreationInputSchema.required())
    .nullable()
    .notRequired()
    .default(() => {
      return [];
    }),
  notebooks: array()
    .of(notebookCreationInputSchema.required())
    .nullable()
    .notRequired()
    .default(() => {
      return [];
    }),
  tasks: array()
    .of(taskCreationInputSchema.required())
    .nullable()
    .notRequired()
    .default(() => {
      return [];
    }),
  archivedAt: date().nullable().notRequired(),
});

export const userUpdateInputSchema: SchemaOf<UserUpdateInput> = object({
  name: string().nullable().notRequired(),
  email: string().notRequired(),
  emailVerified: bool().nullable().notRequired(),
  image: string().nullable().notRequired(),
  isAdmin: bool().notRequired(),
  settings: settingsSchema.notRequired(),
  lastLogin: date().nullable().notRequired(),
  accounts: array().of(accountCreationInputSchema).nullable().notRequired(),
  calendars: array().of(calendarCreationInputSchema).nullable().notRequired(),
  calendarEvents: array().of(calendarEventCreationInputSchema).nullable().notRequired(),
  goals: array().of(goalCreationInputSchema).nullable().notRequired(),
  habits: array().of(habitCreationInputSchema).nullable().notRequired(),
  mantras: array().of(mantraCreationInputSchema).nullable().notRequired(),
  notebooks: array().of(notebookCreationInputSchema).nullable().notRequired(),
  tasks: array().of(taskCreationInputSchema).nullable().notRequired(),
  archivedAt: date().nullable().notRequired(),
});

export type UserCreationInputSchemaType = InferType<typeof userCreationInputSchema>;
export type UserUpdateInputSchemaType = InferType<typeof userUpdateInputSchema>;
