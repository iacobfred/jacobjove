/* Do not edit this file. It was generated programmatically. */

import { MutationHookOptions } from "@apollo/client";
import {
  CREATE_TASK,
  UPDATE_TASK,
  updateCacheAfterCreatingTask,
} from "@web/graphql/generated/mutations/task.mutations";
import { TaskFragment } from "@web/graphql/generated/fragments/task.fragment";
import { TaskCreationArgs, TaskUpdateArgs } from "@web/graphql/generated/args/task.args";
import { useHandleMutation } from "@web/utils/data/mutation";
import { Payload, ArrayAction } from "@web/utils/data/reduction";
import { useEffect, useReducer, Dispatch } from "react";
import {
  taskReducer,
  tasksReducer,
  TaskData,
  initializeTaskData,
} from "@web/graphql/generated/reducers/task.reducer";
import { useUser } from "@web/components/contexts/UserContext";
import {
  taskCreationInputSchema,
  taskUpdateInputSchema,
} from "@web/graphql/generated/schemas/task.schemas";
import { getOptimisticResponseForTaskCreation } from "@web/graphql/generated/mutations/task.mutations";

type TaskCreationMutationHookOptions = MutationHookOptions<
  { createTask: TaskFragment },
  TaskCreationArgs
>;

export const useCreateTask = (options?: TaskCreationMutationHookOptions) => {
  return useHandleMutation<{ createTask: TaskFragment }, TaskCreationArgs>(
    CREATE_TASK,
    { ...updateCacheAfterCreatingTask, ...(options ?? {}) },
    taskCreationInputSchema,
    getOptimisticResponseForTaskCreation
  );
};

type TaskUpdateMutationHookOptions = MutationHookOptions<
  { updateTask: TaskFragment },
  TaskUpdateArgs
>;

export const useUpdateTask = (options?: TaskUpdateMutationHookOptions) => {
  return useHandleMutation<{ updateTask: TaskFragment }, TaskUpdateArgs>(
    UPDATE_TASK,
    options,
    taskUpdateInputSchema
  );
};

export const useTaskReducer = (data?: TaskData): [TaskData, Dispatch<Payload<TaskData>>] => {
  const { user } = useUser();
  const starterData = data ?? {};
  const initializedData = initializeTaskData(starterData, user);
  const [taskData, dispatchTaskData] = useReducer(taskReducer, initializedData, initializeTaskData);
  useEffect(() => {
    if (user?.id && !taskData?.userId) {
      dispatchTaskData({
        field: "init",
        value: initializeTaskData(taskData, user),
      });
    }
  }, [user, taskData]);
  return [taskData, dispatchTaskData];
};

export const useTasksReducer = (
  data: TaskFragment[]
): [TaskFragment[], Dispatch<ArrayAction<TaskFragment>>] => {
  return useReducer(tasksReducer, data);
};
