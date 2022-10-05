/* Do not edit this file. It was generated programmatically. */
import { ListItemFragment } from "@web/generated/graphql/fragments/listItem.fragment";
import { UserFragment } from "@web/generated/graphql/fragments/user.fragment";
import { ListItem } from "@web/generated/graphql/types";
import { ArrayAction, arrayReducer, Payload } from "@web/hooks/reduction";
import { Data } from "@web/types/data";

export type ListItemData = Data<ListItem>;

export function initializeListItemData(
  data: Partial<ListItemData>,
  user?: UserFragment | null | undefined
): Partial<ListItemData> {
  const userId = user?.id;
  if (!userId) return data;
  return {
    userId,
    ...Object.fromEntries(Object.entries(data).filter(([, value]) => value !== undefined)), // TODO: make this unnecessary
  };
}

export function listItemReducer(state: ListItemData, payload: Payload<ListItemData>) {
  if (payload.field === "init")
    return initializeListItemData(payload.value as Partial<ListItemData>);
  return { ...state, [payload.field]: payload.value };
}

export function listItemsReducer(state: ListItemFragment[], action: ArrayAction<ListItemFragment>) {
  return arrayReducer<ListItemFragment>(state, action);
}
