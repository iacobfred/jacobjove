/* Do not edit this file. It was generated programmatically. */
import { CalendarEventFragment } from "@web/generated/graphql/fragments/calendarEvent.fragment";
import { UserFragment } from "@web/generated/graphql/fragments/user.fragment";
import { CalendarEvent } from "@web/generated/graphql/types";
import { initializeCalendarEventCalendarId } from "@web/graphql/schema/initializers";
import { ArrayAction, arrayReducer, Payload } from "@web/hooks/reduction";
import { Data } from "@web/types/data";

export type CalendarEventData = Data<CalendarEvent>;

export function initializeCalendarEventData(
  data: Partial<CalendarEventData>,
  user?: UserFragment | null | undefined
): Partial<CalendarEventData> {
  const userId = user?.id;
  if (!userId) return data;
  return {
    userId,
    title: "",
    calendarId: initializeCalendarEventCalendarId(user),
    ...Object.fromEntries(Object.entries(data).filter(([, value]) => value !== undefined)), // TODO: make this unnecessary
  };
}

export function calendarEventReducer(
  state: CalendarEventData,
  payload: Payload<CalendarEventData>
) {
  if (payload.field === "init")
    return initializeCalendarEventData(payload.value as Partial<CalendarEventData>);
  return { ...state, [payload.field]: payload.value };
}

export function calendarEventsReducer(
  state: CalendarEventFragment[],
  action: ArrayAction<CalendarEventFragment>
) {
  return arrayReducer<CalendarEventFragment>(state, action);
}
