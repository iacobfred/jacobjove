import CompletionCheckbox from "@/components/actions/CompletionCheckbox";
import Stopwatch from "@/components/actions/Stopwatch";
import { taskFragment, TaskFragment } from "@/graphql/schema/generated/fragments/task.fragment";
import { Habit } from "@/graphql/schema/generated/models/habit.model";
import { Task } from "@/graphql/schema/generated/models/task.model";
import { CREATE_TASK, UPDATE_TASK } from "@/graphql/schema/generated/mutations/task.mutations";
import { ID } from "@/graphql/schema/types";
import { buildNewItemFragment } from "@/graphql/utils/fragments";
import { addItemToCache } from "@/utils/apollo";
import { printError } from "@/utils/apollo/error-handling";
import { TaskData } from "@/utils/tasks";
import { useMutation } from "@apollo/client";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import NotesIcon from "@mui/icons-material/Notes";
import TodayIcon from "@mui/icons-material/Today";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { format } from "date-fns";
import { bindMenu, bindPopover, bindTrigger, usePopupState } from "material-ui-popup-state/hooks";
import { Dispatch, FC, useState } from "react";
import { useUser } from "../contexts/UserContext";
import TasksTable from "./TasksTable";

interface TaskDialogProps extends ReturnType<typeof bindPopover> {
  task: TaskData;
  dispatchTaskData: Dispatch<{ field: string; value: unknown }>;
}

const TaskDialog: FC<TaskDialogProps> = (props: TaskDialogProps) => {
  const {
    task: taskData,
    dispatchTaskData,
    onClose: initialOnClose,
    anchorEl: _anchorEl,
    ...dialogProps
  } = props;
  const user = useUser();
  const [time, setTime] = useState(0);
  const [stopwatchIsRunning, setStopwatchIsRunning] = useState(false);
  const [editing, setEditing] = useState(!taskData.id);

  const canUpdate = !!taskData.id;

  const onClose = () => {
    initialOnClose();
    canUpdate && setEditing(false);
  };

  const menuState = usePopupState({
    variant: "popper",
    popupId: taskData.id ? `task-${taskData.id}-menu` : "new-task-menu",
  });

  const [updateTask, { loading: _loadingUpdateTask }] = useMutation(UPDATE_TASK);
  const [createTask, { loading: _loadingCreateTask }] = useMutation<{
    createTask: TaskFragment;
  }>(CREATE_TASK, {
    update(cache, { data }) {
      const { createTask } = data || {};
      addItemToCache(
        cache,
        createTask,
        "tasks",
        ...buildNewItemFragment(taskFragment, "TaskFragment", "Task")
      );
    },
  });

  const handleClose = () => {
    if (stopwatchIsRunning) {
      // TODO: ask for confirmation
      setStopwatchIsRunning(false);
    }
    console.log("calling onClose");
    onClose();
  };

  const handleUpdateField = (field: string, value: unknown) => {
    dispatchTaskData({ field, value });
    canUpdate &&
      updateTask({
        variables: {
          where: { id: taskData.id },
          data: { [field]: value },
        },
        optimisticResponse: {
          __typename: "Mutation",
          updateTask: {
            __typename: "Task",
            ...taskData,
            [field]: value,
          },
        },
      }).catch(console.error);
  };

  const menuTriggerProps = bindTrigger(menuState);
  const menuProps = bindMenu(menuState);

  const completed = taskData.completedAt ? true : false;

  // const habit = taskData.habit;
  const habit: Habit | null = null; // TODO

  // const subtasks = taskData.subtasks;
  const subtasks: Task[] = []; // TODO

  // const metricUsages = habit?.metricUsages;
  // const metricUsages = null; // TODO

  const saveAndExit = () => {
    if (!canUpdate && taskData.title) {
      console.log("Creating task...", taskData);
      const now = new Date();
      createTask({
        variables: {
          data: {
            ...taskData,
          },
        },
        optimisticResponse: {
          createTask: {
            __typename: "Task",
            id: "tmp-id",
            habitId: null,
            createdAt: now,
            updatedAt: now,
            userId: user?.id as ID,
            ...taskData,
          },
        },
      }).catch(printError);
      dispatchTaskData({
        field: "init",
        value: {
          rank: taskData.rank + 1,
        },
      }); // TODO
    }
    handleClose();
  };

  return (
    <Dialog fullWidth onClose={onClose} {...dialogProps}>
      <DialogTitle sx={{ minHeight: "3.3rem", borderBottom: "1px solid gray" }}>
        {!!taskData.id && !!updateTask && (
          <Box
            ml={"auto"}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <IconButton
              title={`Display actions for ${taskData.title}`}
              className="actions-menu-icon"
              {...menuTriggerProps}
              disableTouchRipple
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              {...menuProps}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              MenuListProps={{
                "aria-labelledby": "calendar-menu-button-x",
              }}
            >
              {/* <MenuItem
                disabled={editing}
                title={`Edit ${taskData.title}`}
                onClick={() => {
                  setEditing(true);
                  menuProps.onClose();
                }}
              >
                <EditIcon /> <Typography sx={{ ml: 1 }}>{"Edit task"}</Typography>
              </MenuItem> */}
              <MenuItem
                disabled={!taskData.id}
                onClick={() => {
                  const archivedAt = new Date();
                  updateTask({
                    variables: {
                      where: { id: taskData.id },
                      data: { archivedAt: archivedAt },
                    },
                    optimisticResponse: {
                      updateTask: {
                        __typename: "Task",
                        subtasks: [],
                        habit: null,
                        ...taskData,
                        archivedAt,
                      },
                    },
                  }).catch(printError);
                  menuProps.onClose();
                }}
              >
                <DeleteIcon /> <Typography sx={{ ml: 1 }}>{"Delete task"}</Typography>
              </MenuItem>
            </Menu>
            <IconButton aria-label="close" onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
        )}
      </DialogTitle>
      <DialogContent sx={{ px: 0 }}>
        <Box display="flex" borderBottom={"1px solid gray"}>
          <CompletionCheckbox
            sx={{ alignSelf: "start", alignItems: "start" }}
            checked={completed}
            disabled={!canUpdate}
            onClick={() => handleUpdateField("completedAt", new Date())}
          />
          <Box
            mb={2}
            flexGrow={1}
            onKeyUp={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                saveAndExit();
              }
            }}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget) && taskData.id)
                setEditing(false);
            }}
          >
            <Box sx={{ "& *": { fontSize: "1.6rem", fontWeight: "400" } }}>
              {editing ? (
                <TextField
                  autoFocus
                  id="title"
                  name="title"
                  variant="standard"
                  value={taskData.title}
                  placeholder={"Task title"}
                  onChange={(event) => handleUpdateField("title", event.target.value)}
                />
              ) : (
                <Typography component="span" variant="h2" onClick={() => setEditing(true)}>
                  {taskData.title}
                </Typography>
              )}
            </Box>
            {editing ? (
              <TextField
                multiline
                fullWidth
                id="description"
                name="description"
                // variant="standard"
                value={taskData.description}
                placeholder="Task description"
                onChange={(event) => handleUpdateField("description", event.target.value)}
              />
            ) : (
              <DialogContentText
                component="div"
                sx={{ mt: 1, mb: 2 }}
                onClick={() => setEditing(true)}
              >
                {taskData.description || (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: (theme) =>
                        theme.palette.mode === "light"
                          ? "rgba(0,0,0,0.5)"
                          : "rgba(255,255,255,0.5)",
                    }}
                  >
                    <NotesIcon />
                    <Typography sx={{ ml: 1 }}>{"Description"}</Typography>
                  </Box>
                )}
              </DialogContentText>
            )}
            <Box my={2}>
              {subtasks?.length ? (
                <TasksTable tasks={subtasks} moveTaskRow={undefined} updateTaskRank={undefined} />
              ) : (
                <Typography>{`Add subtasks.`}</Typography>
              )}
            </Box>
            <Box my={2}>
              {taskData.habitId ? (
                <Typography>{`This task is associated with habit ${taskData.habitId}.`}</Typography>
              ) : (
                <Typography>
                  {`Trying to build a new habit? Create a habit from this task.`}
                </Typography>
              )}
            </Box>
          </Box>
          <Box
            ml={2}
            p={2}
            sx={{
              bgcolor: (theme) =>
                theme.palette.mode === "light" ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)",
              // backgroundColor: (theme) => theme.palette.mode === "light" ? "gray" : "black"
            }}
          >
            <Box my={2}>
              <Typography>{"Due date"}</Typography>
              <Box display="flex" alignItems="center">
                <TodayIcon />
                <Typography component="span">
                  {taskData.dueDate ? format(taskData.dueDate, "h:m") : "No due date"}
                </Typography>
              </Box>
            </Box>
            <Box my={2}>
              <Typography>{"Scheduled date"}</Typography>
              <Box display="flex" alignItems="center">
                <TodayIcon />
                <Typography component="span">
                  {taskData.plannedStartDate
                    ? format(taskData.plannedStartDate, "h:m")
                    : "Unscheduled"}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        {!subtasks?.length && !!habit && (
          <Stopwatch
            time={time}
            setTime={setTime}
            running={stopwatchIsRunning}
            setRunning={setStopwatchIsRunning}
          />
        )}
        {/* {!metricUsages?.length ? null : (
          <Box display={"flex"} justifyContent={"center"} width={"50%"} mx={"auto"}>
            <TableContainer sx={{ my: 3 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Metric</TableCell>
                    <TableCell>Value</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {metricUsages.map((metricUsage) => {
                    return (
                      <TableRow key={metricUsage.id}>
                        <TableCell align="right">
                          <Typography
                            sx={{
                              "&::first-letter": { textTransform: "capitalize" },
                            }}
                          >
                            {metricUsage.metric?.name}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <TextField
                            type="number"
                            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                          />
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        )} */}
      </DialogContent>
      <DialogActions>
        {/* {editing && <Button onClick={saveAndExit}>{"Done"}</Button>} */}
      </DialogActions>
    </Dialog>
  );
};

export default TaskDialog;
