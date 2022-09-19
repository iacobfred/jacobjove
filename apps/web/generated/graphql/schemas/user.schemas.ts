/* Do not edit this file. It was generated programmatically. */

import { UserCreationInput, UserUpdateInput } from "@web/generated/graphql/inputs/user.inputs";
import { accountCreationInputSchema } from "@web/generated/graphql/schemas/account.schemas";
import { calendarCreationInputSchema } from "@web/generated/graphql/schemas/calendar.schemas";
import { calendarEventCreationInputSchema } from "@web/generated/graphql/schemas/calendarEvent.schemas";
import { goalCreationInputSchema } from "@web/generated/graphql/schemas/goal.schemas";
import { habitCreationInputSchema } from "@web/generated/graphql/schemas/habit.schemas";
import { mantraCreationInputSchema } from "@web/generated/graphql/schemas/mantra.schemas";
import { notebookCreationInputSchema } from "@web/generated/graphql/schemas/notebook.schemas";
import { taskCreationInputSchema } from "@web/generated/graphql/schemas/task.schemas";
import { array, bool, date, InferType, object, Schema, string } from "yup";

export const settingsSchema = object({
  colorMode: string().nullable().optional(),
  defaultCalendarId: string()
    .required()
    .default(() => {
      return "6327e07babad24686f9d2ef9";
    }),
});

export const userCreationInputSchema: Schema<UserCreationInput> = object({
  name: string().nullable().optional(),
  email: string().required(),
  emailVerified: bool().nonNullable().optional(),
  image: string().nullable().optional(),
  isAdmin: bool()
    .nonNullable()
    .optional()
    .default(() => {
      return false;
    }),
  settings: settingsSchema.optional().default(() => {
    return {};
  }),
  lastLogin: date().nullable().optional(),
  accounts: array()
    .of(accountCreationInputSchema.required())
    .optional()
    .default(() => {
      return [];
    }),
  calendars: array()
    .of(calendarCreationInputSchema.required())
    .optional()
    .default(() => {
      return [];
    }),
  calendarEvents: array()
    .of(calendarEventCreationInputSchema.required())
    .optional()
    .default(() => {
      return [];
    }),
  goals: array()
    .of(goalCreationInputSchema.required())
    .optional()
    .default(() => {
      return [];
    }),
  habits: array()
    .of(habitCreationInputSchema.required())
    .optional()
    .default(() => {
      return [];
    }),
  mantras: array()
    .of(mantraCreationInputSchema.required())
    .optional()
    .default(() => {
      return [];
    }),
  notebooks: array()
    .of(notebookCreationInputSchema.required())
    .optional()
    .default(() => {
      return [];
    }),
  tasks: array()
    .of(taskCreationInputSchema.required())
    .optional()
    .default(() => {
      return [];
    }),
  archivedAt: date().nullable().optional(),
});

export const userUpdateInputSchema: Schema<UserUpdateInput> = object({
  name: string().nullable().optional(),
  email: string().nonNullable().optional(),
  emailVerified: bool().nonNullable().optional(),
  image: string().nullable().optional(),
  isAdmin: bool().nonNullable().optional(),
  settings: settingsSchema.optional(),
  lastLogin: date().nullable().optional(),
  accounts: array().of(accountCreationInputSchema).optional(),
  calendars: array().of(calendarCreationInputSchema).optional(),
  calendarEvents: array().of(calendarEventCreationInputSchema).optional(),
  goals: array().of(goalCreationInputSchema).optional(),
  habits: array().of(habitCreationInputSchema).optional(),
  mantras: array().of(mantraCreationInputSchema).optional(),
  notebooks: array().of(notebookCreationInputSchema).optional(),
  tasks: array().of(taskCreationInputSchema).optional(),
  archivedAt: date().nullable().optional(),
});

export type UserCreationInputSchemaType = InferType<typeof userCreationInputSchema>;
export type UserUpdateInputSchemaType = InferType<typeof userUpdateInputSchema>;
