import {
  FindUniqueGoalArgs,
  GoalCreationArgs,
  GoalUpdateArgs,
  GoalUpsertionArgs,
} from "@web/generated/graphql/args/goal.args";
import GoalModel from "@web/generated/models/Goal";
import { convertFilterForMongo } from "@web/graphql/schema/helpers";

export const findGoal = async ({ where }: FindUniqueGoalArgs) => {
  const filter = convertFilterForMongo(where);
  return GoalModel.findOne(filter).lean({ virtuals: true });
};

export const createGoal = async ({ data }: GoalCreationArgs) => {
  return GoalModel.create([data]).then((results) => results[0]);
};

export const updateGoal = async ({ where, data }: GoalUpdateArgs) => {
  const filter = convertFilterForMongo(where);
  return await GoalModel.findOneAndUpdate(filter, data, { returnDocument: "after" }).lean({
    virtuals: true,
  });
};

export const upsertGoal = async ({ where, data }: GoalUpsertionArgs) => {
  const exists = await GoalModel.exists(where);
  return exists ? updateGoal({ where, data }) : createGoal({ data });
  /*
  const result: ModifyResult<Goal> = await GoalModel.findOneAndUpdate(
    convertFilterForMongo(where),
    data,
    {
      upsert: true,
      new: true,
      returnDocument: "after",
      runValidators: true,
      setDefaultsOnInsert: true,
      rawResult: true,
    }
  ).lean({ virtuals: true });
  return result.value;
  */
};
