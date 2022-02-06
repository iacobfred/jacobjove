import TasksTable, { TasksTableProps } from "@/components/actions/TasksTable";
import DateSelector from "@/components/dates/DateSelector";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import TableRowsIcon from "@mui/icons-material/TableRows";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { FC, useState } from "react";
import { createPortal } from "react-dom";

type ViewMode = "list" | "board";

interface TasksBoxProps extends TasksTableProps {
  defaultView?: ViewMode;
}

const TasksBox: FC<TasksBoxProps> = (props: TasksBoxProps) => {
  const { defaultView, ...tasksTableProps } = props;
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [view, setView] = useState<ViewMode>(defaultView ?? "list");
  const [fullScreen, setFullScreen] = useState(false);
  const renderedComponent = (
    <Box
      display="flex"
      flexDirection={"column"}
      height={"100%"}
      sx={{
        ...(fullScreen
          ? {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: (theme) => theme.palette.background.default,
              padding: "0.5rem",
              zIndex: 1e14,
            }
          : {}),
      }}
    >
      <Box display="flex" justifyContent={"space-between"} alignItems={"center"}>
        <Box display="flex" justifyContent={"center"} alignItems={"end"}>
          <ToggleButtonGroup
            exclusive
            value={view}
            onChange={(_, value: ViewMode) => {
              setView(value);
            }}
            size="small"
            color="primary"
            aria-label="text alignment"
          >
            <ToggleButton value="list" aria-label="list view">
              <TableRowsIcon />
            </ToggleButton>
            <ToggleButton value="board" aria-label="board view">
              <ViewColumnIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
        <DateSelector date={selectedDate} setDate={setSelectedDate} />
        <Box
          display={"flex"}
          alignItems={"start"}
          justifyContent={"center"}
          position="relative"
          sx={{
            "& button svg": {
              fontSize: "1.25rem",
            },
          }}
        >
          <IconButton
            title={!fullScreen ? `Expand to full screen` : `Exit full screen`}
            onClick={() => setFullScreen(!fullScreen)}
          >
            {!fullScreen ? <ZoomOutMapIcon /> : <CloseFullscreenIcon />}
          </IconButton>
        </Box>
      </Box>{" "}
      <TasksTable {...tasksTableProps} />
    </Box>
  );
  if (fullScreen) return createPortal(renderedComponent, document.body);
  return renderedComponent;
};

export default TasksBox;
