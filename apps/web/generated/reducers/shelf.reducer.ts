/* Do not edit this file. It was generated programmatically. */
import { ShelfFragment } from "@web/generated/graphql/fragments/shelf.fragment";
import { Shelf } from "@web/generated/graphql/types";
import { ArrayAction, arrayReducer, Payload } from "@web/hooks/reduction";
import { Data } from "@web/types/data";

export type ShelfData = Data<Shelf>;

export function initializeShelfData(data: Partial<ShelfData>): Partial<ShelfData> {
  return {
    ...Object.fromEntries(Object.entries(data).filter(([, value]) => value !== undefined)), // TODO: make this unnecessary
  };
}

export function shelfReducer(state: ShelfData, payload: Payload<ShelfData>) {
  if (payload.field === "init") return initializeShelfData(payload.value as Partial<ShelfData>);
  return { ...state, [payload.field]: payload.value };
}

export function shelvesReducer(state: ShelfFragment[], action: ArrayAction<ShelfFragment>) {
  return arrayReducer<ShelfFragment>(state, action);
}
