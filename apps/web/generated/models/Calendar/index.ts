/* Do not edit this file. It was generated programmatically. */

import { Calendar } from "@web/generated/interfaces/Calendar";
import { CalendarDocument } from "@web/generated/models/Calendar/document";
import { postCreate, postUpdate, preSave } from "@web/generated/models/Calendar/hooks";
import { DEFAULT_SCHEMA_OPTIONS } from "@web/graphql/schema/types";
import mongoose, { ModifyResult, UpdateQuery } from "mongoose";
import mongooseLeanVirtuals from "mongoose-lean-virtuals";

const calendarSchema = new mongoose.Schema<Calendar>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      trim: true,
      required: true,
    },
    color: {
      type: String,
      trim: true,
      required: false,
      default: null,
    },
    provider: {
      type: String,
      trim: true,
      required: false,
      default: null,
    },
    remoteId: {
      type: String,
      trim: true,
      required: false,
      default: null,
    },
    syncToken: {
      type: String,
      trim: true,
      required: false,
      default: null,
    },
    accountId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Account",
      required: false,
      default: null,
    },
    primary: {
      type: Boolean,
      required: false,
      default: null,
    },
    public: {
      type: Boolean,
      required: false,
      default: null,
    },
    enabled: {
      type: Boolean,
      required: false,
      default: true,
    },
    archivedAt: { type: Date, required: false, default: null },
  },
  DEFAULT_SCHEMA_OPTIONS
);

calendarSchema.plugin(mongooseLeanVirtuals);

calendarSchema.pre<CalendarDocument>("save", async function () {
  console.log("Saving Calendar", this);
  await preSave(this);
});

calendarSchema.post<CalendarDocument>("save", async function (document) {
  console.log("Saved Calendar", document);
  await postCreate(document);
});

calendarSchema.post<CalendarDocument>(
  "findOneAndUpdate",
  async function (_result: CalendarDocument | ModifyResult<CalendarDocument>) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const query = this as unknown as UpdateQuery<CalendarDocument>;
    const updatedFields = query.getUpdate().$set;
    if ((_result as ModifyResult<CalendarDocument>).value) {
      const result = _result as ModifyResult<CalendarDocument>;
      const calendar = result.value;
      if (calendar) {
        if (!result.lastErrorObject?.updatedExisting) {
          await postCreate(calendar);
        } else {
          await postUpdate(calendar, updatedFields);
        }
      }
    } else {
      const result = _result as CalendarDocument;
      await postUpdate(result, updatedFields);
    }
  }
);

export { calendarSchema };

// https://stackoverflow.com/questions/19051041/cannot-overwrite-model-once-compiled-mongoose
export const CalendarModel =
  mongoose.models.Calendar || mongoose.model<Calendar>("Calendar", calendarSchema);

export default CalendarModel;
