/* Edit this file to add a non-default post-save hook for the Calendar type. */

import CalendarDocument from "@web/generated/interfaces/Calendar";

export const postUpdate = async (calendar: CalendarDocument, updatedFields: any) => {
  return calendar;
};
