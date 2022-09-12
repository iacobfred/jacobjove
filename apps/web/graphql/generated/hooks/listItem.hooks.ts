/* Do not edit this file. It was generated programmatically. */

import { MutationHookOptions } from "@apollo/client";
import {
  CREATE_LIST_ITEM,
  UPDATE_LIST_ITEM,
  updateCacheAfterCreatingListItem,
} from "@web/graphql/generated/mutations/listItem.mutations";
import { ListItemFragment } from "@web/graphql/generated/fragments/listItem.fragment";
import {
  ListItemCreationArgs,
  ListItemUpdateArgs,
} from "@web/graphql/generated/args/listItem.args";
import { useHandleMutation } from "@web/utils/data/mutation";
import { Payload, ArrayAction } from "@web/utils/data/reduction";
import { useEffect, useReducer, Dispatch } from "react";
import {
  listItemReducer,
  listItemsReducer,
  ListItemData,
  initializeListItemData,
} from "@web/graphql/generated/reducers/listItem.reducer";
import { useUser } from "@web/components/contexts/UserContext";
import {
  listItemCreationInputSchema,
  listItemUpdateInputSchema,
} from "@web/graphql/generated/schemas/listItem.schemas";
import { getOptimisticResponseForListItemCreation } from "@web/graphql/generated/mutations/listItem.mutations";

type ListItemCreationMutationHookOptions = MutationHookOptions<
  { createListItem: ListItemFragment },
  ListItemCreationArgs
>;

export const useCreateListItem = (options?: ListItemCreationMutationHookOptions) => {
  return useHandleMutation<{ createListItem: ListItemFragment }, ListItemCreationArgs>(
    CREATE_LIST_ITEM,
    { ...updateCacheAfterCreatingListItem, ...(options ?? {}) },
    listItemCreationInputSchema,
    getOptimisticResponseForListItemCreation
  );
};

type ListItemUpdateMutationHookOptions = MutationHookOptions<
  { updateListItem: ListItemFragment },
  ListItemUpdateArgs
>;

export const useUpdateListItem = (options?: ListItemUpdateMutationHookOptions) => {
  return useHandleMutation<{ updateListItem: ListItemFragment }, ListItemUpdateArgs>(
    UPDATE_LIST_ITEM,
    options,
    listItemUpdateInputSchema
  );
};

export const useListItemReducer = (
  data?: ListItemData
): [ListItemData, Dispatch<Payload<ListItemData>>] => {
  const { user } = useUser();
  const starterData = data ?? {};
  const initializedData = initializeListItemData(starterData, user);
  const [listItemData, dispatchListItemData] = useReducer(
    listItemReducer,
    initializedData,
    initializeListItemData
  );
  useEffect(() => {
    if (user?.id && !listItemData?.userId) {
      dispatchListItemData({
        field: "init",
        value: initializeListItemData(listItemData, user),
      });
    }
  }, [user, listItemData]);
  return [listItemData, dispatchListItemData];
};

export const useListItemsReducer = (
  data: ListItemFragment[]
): [ListItemFragment[], Dispatch<ArrayAction<ListItemFragment>>] => {
  return useReducer(listItemsReducer, data);
};
