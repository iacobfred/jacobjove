/* Do not edit this file. It was generated programmatically. */

import { Belief } from "@web/generated/interfaces/Belief";
import { postCreate, postUpdate, preSave } from "@web/generated/models/Belief/hooks";
import { DEFAULT_SCHEMA_OPTIONS } from "@web/graphql/schema/types";
import mongoose, { HydratedDocument, ModifyResult, UpdateQuery } from "mongoose";
import mongooseLeanVirtuals from "mongoose-lean-virtuals";

const beliefSchema = new mongoose.Schema<Belief>(
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
    description: {
      type: String,
      trim: true,
      required: false,
      default: null,
    },
    archivedAt: { type: Date, required: false, default: null },
  },
  DEFAULT_SCHEMA_OPTIONS
);

beliefSchema.plugin(mongooseLeanVirtuals);

beliefSchema.pre<HydratedDocument<Belief>>("save", async function () {
  return Promise.resolve(preSave(this));
});

beliefSchema.post<Belief>("save", async function (document) {
  await postCreate(document);
});

beliefSchema.post<Belief>(
  "findOneAndUpdate",
  async function (_result: Belief | ModifyResult<Belief>) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const query = this as unknown as UpdateQuery<Belief>;
    const updatedFields = query.getUpdate().$set;
    if ((_result as ModifyResult<Belief>).value) {
      const result = _result as ModifyResult<Belief>;
      const belief = result.value;
      if (belief) {
        if (!result.lastErrorObject?.updatedExisting) {
          await postCreate(belief);
        } else {
          await postUpdate(belief, updatedFields);
        }
      }
    } else {
      const result = _result as Belief;
      await postUpdate(result, updatedFields);
    }
  }
);

export { beliefSchema };

// https://stackoverflow.com/questions/19051041/cannot-overwrite-model-once-compiled-mongoose
export const BeliefModel: mongoose.Model<Belief> =
  mongoose.models.Belief || mongoose.model<Belief>("Belief", beliefSchema);

export default BeliefModel;
