/* Do not edit this file. It was generated programmatically. */
// import Shelving from "@web/generated/graphql/types/Shelving";
import { ShelvingFragment } from "@web/generated/graphql/fragments/shelving.fragment";
import { UserFragment } from "@web/generated/graphql/fragments/user.fragment";
import { ShelvingCreationInput } from "@web/generated/graphql/inputs/shelving.inputs";
import { ID } from "@web/graphql/schema/types";
import { ArrayAction, arrayReducer, Payload } from "@web/hooks/reduction";

export interface ShelvingData extends Partial<ShelvingCreationInput> {
  id?: ID;
}
// export type ShelvingData = InputData<Shelving>;
// export type InitialShelvingData = InitialData<Shelving, "rank" | "userId">;

export function initializeShelvingData(
  data: Partial<ShelvingData>,
  user?: UserFragment | null | undefined
): Partial<ShelvingData> {
  return {
    ...Object.fromEntries(Object.entries(data).filter(([, value]) => value !== undefined)), // TODO: make this unnecessary
  };
}

export function shelvingReducer(state: ShelvingData, payload: Payload<ShelvingData>) {
  if (payload.field === "init")
    return initializeShelvingData(payload.value as Partial<ShelvingData>);
  return { ...state, [payload.field]: payload.value };
}

export function shelvingsReducer(state: ShelvingFragment[], action: ArrayAction<ShelvingFragment>) {
  return arrayReducer<ShelvingFragment>(state, action);
}
