import CreationDialog from "@web/components/data/CreationDialog";
import { useCreateList, useListReducer } from "@web/graphql/generated/hooks/list.hooks";
import { bindPopover } from "material-ui-popup-state/hooks";
import { ListCreationInput } from "@web/graphql/generated/inputs/list.inputs";
import List from "@web/graphql/generated/types/List";
import { ListFragment } from "@web/graphql/generated/fragments/list.fragment";
import fields from "@web/graphql/generated/fields/list.fields";

export type ListCreationDialogProps = ReturnType<typeof bindPopover>;

export default function ListCreationDialog(props: ListCreationDialogProps) {
  const [create,] = useCreateList();
  const dataTuple = useListReducer();
  return CreationDialog<List, ListCreationInput, { createList: ListFragment }>({
    typeName: "list",
    dataTuple,
    create,
    fields,
    // produceInitialData,
    ...props,
  });
}
