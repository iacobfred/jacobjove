import CreationDialog from "@web/components/data/CreationDialog";
import fields from "@web/generated/graphql/fields/habit.fields";
import { HabitFragment } from "@web/generated/graphql/fragments/habit.fragment";
import { HabitCreationInput } from "@web/generated/graphql/inputs/habit.inputs";
import { useCreateHabit, useHabitReducer } from "@web/generated/hooks/habit.hooks";
import { bindDialog } from "material-ui-popup-state/hooks";

export interface HabitCreationDialogProps extends ReturnType<typeof bindDialog> {
  close: () => void;
  children?: React.ReactNode;
}

export default function HabitCreationDialog(props: HabitCreationDialogProps) {
  const [create] = useCreateHabit();
  const dataTuple = useHabitReducer();
  return CreationDialog<HabitFragment, HabitCreationInput, { createHabit: HabitFragment }>({
    typeName: "habit",
    dataTuple,
    create,
    fields,
    // produceInitialData,
    ...props,
  });
}
