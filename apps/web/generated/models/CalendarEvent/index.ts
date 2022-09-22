/* Do not edit this file. It was generated programmatically. */

import { CalendarEvent } from "@web/generated/interfaces/CalendarEvent";
import { postCreate, postUpdate, preSave } from "@web/generated/models/CalendarEvent/hooks";
import { DEFAULT_SCHEMA_OPTIONS } from "@web/graphql/schema/types";
import mongoose, { ModifyResult, UpdateQuery } from "mongoose";
import mongooseLeanVirtuals from "mongoose-lean-virtuals";

const calendarEventSchema = new mongoose.Schema<CalendarEvent>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    calendarId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Calendar",
      required: true,
    },
    remoteId: {
      type: String,
      trim: true,
      required: false,
      default: null,
    },
    scheduleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Schedule",
      required: false,
      default: null,
    },
    habitId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Habit",
      required: false,
      default: null,
    },
    taskId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task",
      required: false,
      unique: true,
      default: null,
    },
    title: {
      type: String,
      trim: true,
      required: true,
    },
    start: {
      type: Date,
      required: true,
    },
    end: {
      type: Date,
      required: false,
      default: null,
    },
    allDay: {
      type: Boolean,
      required: false,
      default: false,
    },
    notes: {
      type: String,
      trim: true,
      required: false,
      default: null,
    },
    canceled: {
      type: Boolean,
      required: false,
      default: null,
    },
    archivedAt: { type: Date, required: false, default: null },
  },
  DEFAULT_SCHEMA_OPTIONS
);

calendarEventSchema.plugin(mongooseLeanVirtuals);

calendarEventSchema.pre<CalendarEvent>("save", async function () {
  return Promise.resolve(preSave(this));
});

calendarEventSchema.post<CalendarEvent>("save", async function (document) {
  await postCreate(document);
});

calendarEventSchema.post<CalendarEvent>(
  "findOneAndUpdate",
  async function (_result: CalendarEvent | ModifyResult<CalendarEvent>) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const query = this as unknown as UpdateQuery<CalendarEvent>;
    const updatedFields = query.getUpdate().$set;
    if ((_result as ModifyResult<CalendarEvent>).value) {
      const result = _result as ModifyResult<CalendarEvent>;
      const calendarEvent = result.value;
      if (calendarEvent) {
        if (!result.lastErrorObject?.updatedExisting) {
          await postCreate(calendarEvent);
        } else {
          await postUpdate(calendarEvent, updatedFields);
        }
      }
    } else {
      const result = _result as CalendarEvent;
      await postUpdate(result, updatedFields);
    }
  }
);

export { calendarEventSchema };

// https://stackoverflow.com/questions/19051041/cannot-overwrite-model-once-compiled-mongoose
export const CalendarEventModel: mongoose.Model<CalendarEvent> =
  mongoose.models.CalendarEvent ||
  mongoose.model<CalendarEvent>("CalendarEvent", calendarEventSchema);

export default CalendarEventModel;
