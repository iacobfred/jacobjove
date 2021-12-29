import DateSelector from "@/components/Calendar/DateSelector";
import EventEditingDialog from "@/components/Calendar/EventEditingDialog";
import EventSlot from "@/components/Calendar/EventSlot";
import { Calendar, CalendarEvent } from "@/graphql/schema";
import AppleIcon from "@mui/icons-material/Apple";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import CalendarViewMonthIcon from "@mui/icons-material/CalendarViewMonth";
import CalendarViewWeekIcon from "@mui/icons-material/CalendarViewWeek";
import GoogleIcon from "@mui/icons-material/Google";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Skeleton from "@mui/material/Skeleton";
import { styled } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Toolbar from "@mui/material/Toolbar";
import {
  addMinutes,
  differenceInMinutes,
  getHours,
  isSameDay,
  parseISO,
  setHours,
  setMinutes,
  setSeconds,
} from "date-fns";
import { Session } from "next-auth";
import { FC, Fragment, useEffect, useRef, useState } from "react";

// import { google } from 'googleapis';
// const googleCalendarClient = google.calendar('v3');

const START_HOUR = 7;
const END_HOUR = 23;
const NUM_HOURS = END_HOUR - START_HOUR;
const HALF_HOUR_HEIGHT = 48; // Must be divisible by 2.
const HOUR_HEIGHT = HALF_HOUR_HEIGHT * 2;

const Root = styled("div")(() => ({
  "& *": {
    boxSizing: "border-box",
  },
  "& .time-label": {
    display: "flex",
    alignItems: "center",
    justifyContent: "right",
    paddingRight: "0.5rem",
    fontFamily: "Roboto, Arial, sans-serif",
    fontWeight: 400,
    fontSize: "0.7rem",
    lineHeight: "1.66",
    whiteSpace: "nowrap",
    color: "rgba(0, 0, 0, 0.6)",
    minWidth: "3.5rem",
  },
  "& .calendar-slots-column": {
    flexGrow: 1,
    position: "relative",
    cursor: "pointer",
    scrollBehavior: "smooth",
  },
  "& .border-trick-box": {
    borderRight: "1px solid rgba(224, 224, 224, 1)",
    width: "0.5rem",
  },
  "& .calendar-event-slot": {
    display: "flex",
    borderTop: "1px solid rgba(224, 224, 224, 1)",
  },
}));

interface CalendarProps {
  date: Date;
  setDate: (date: Date) => void;
  calendarEvents: CalendarEvent[];
  session: Session;
}

type ViewMode = "day" | "week" | "month";

const CalendarViewer: FC<CalendarProps> = (props: CalendarProps) => {
  const [view, setView] = useState<ViewMode>("day");
  const [selectedDate, setSelectedDate] = useState(props.date);
  const [calendars, setCalendars] = useState<Calendar[]>([]);
  const handleViewTabChange = (event: React.SyntheticEvent, newValue: 0 | 1 | 2) => {
    setView(newValue === 0 ? "day" : newValue === 1 ? "week" : "month");
  };
  const viewTabIndex = view === "day" ? 0 : view === "week" ? 1 : 2;
  return (
    <>
      <Toolbar sx={{ borderBottom: "1px solid rgba(224, 224, 224, 1)" }}>
        <Grid container spacing={1} alignItems="center" justifyContent={"space-between"}>
          <Grid item justifyContent={"center"}>
            <IconButton
              title={`Connect Google Calendar`}
              onClick={() => {
                console.log("connecting to google calendar...");
              }}
            >
              <GoogleIcon sx={{ color: "lightgray", fontSize: "1rem" }} />
            </IconButton>
            <IconButton
              title={`Connect Apple Calendar`}
              onClick={() => {
                console.log("connecting to apple calendar...");
              }}
            >
              <AppleIcon sx={{ color: "lightgray", fontSize: "1.1rem" }} />
            </IconButton>
          </Grid>
          <Grid item justifyContent={"center"}>
            <DateSelector date={selectedDate} onDateChange={setSelectedDate} />
          </Grid>
          <Grid item justifyContent={"center"}>
            <Tabs value={viewTabIndex} onChange={handleViewTabChange}>
              <Tab icon={<CalendarViewDayIcon />} label="Day" />
              <Tab icon={<CalendarViewWeekIcon />} label="Week" />
              <Tab icon={<CalendarViewMonthIcon />} label="Month" />
            </Tabs>
          </Grid>
        </Grid>
      </Toolbar>
      {view === "day" && <DayViewer {...props} selectedDate={selectedDate} />}
      {view === "week" && <WeekViewer {...props} selectedDate={selectedDate} />}
      {view === "month" && <MonthViewer {...props} selectedDate={selectedDate} />}
    </>
  );
};

export default CalendarViewer;

interface ViewerProps extends CalendarProps {
  selectedDate: Date;
  // calendars: Calendar[];
}

const DayViewer: FC<ViewerProps> = (props: ViewerProps) => {
  const { date, setDate, selectedDate, calendarEvents, session } = props;
  const scrollableDivRef = useRef<HTMLDivElement>(null);
  const [eventDialogOpen, setEventEditingDialogOpen] = useState(false);
  const [initialEventFormData, setInitialEventFormData] = useState({
    title: "",
    start: date,
    end: date ? addMinutes(date, 29) : null,
    allDay: false,
    notes: "",
    calendarId: calendarEvents[0]?.calendarId ?? 1, // TODO: Get this from the user's default calendar.
  });

  const dayStart = zeroToHour(date, START_HOUR);
  const allDayBoxHeight = HALF_HOUR_HEIGHT * 1.5;
  const currentTimeOffsetPx =
    (HOUR_HEIGHT / 60) * differenceInMinutes(date, dayStart) + HALF_HOUR_HEIGHT;

  // TODO: create default calendar when user is created; ensure a user has 1+ calendars.
  const primaryCalendarId = calendarEvents[0].calendarId; // calendars.find((c) => c.isPrimary);

  useEffect(() => {
    // Scroll to the current time.
    const scrollableDiv = scrollableDivRef.current;
    if (scrollableDiv) {
      // console.log('Scrolling to', currentTimeOffsetPx);
      // console.log('Before', scrollableDiv.scrollTop);
      scrollableDiv.scrollTo({ top: currentTimeOffsetPx - HOUR_HEIGHT, behavior: "smooth" });
      // console.log('After', scrollableDiv.scrollTop);
    }
  }, [currentTimeOffsetPx]);
  useEffect(() => {
    // Update the current time every minute.
    const intervalId = setInterval(function () {
      setDate(new Date());
    }, 1000 * 60);
    // Clean up when the component unmounts.
    return function cleanup() {
      clearInterval(intervalId);
    };
  }, [setDate]);
  if (!session?.user) {
    return <Skeleton sx={{ height: "100%", maxHeight: "80vh" }} variant="rectangular" />;
  }
  console.log("Rendering calendar viewer...");
  return (
    <Root>
      <Box display="flex">
        <div className="time-labels-column">
          <Box
            className="time-label"
            height={`${allDayBoxHeight}px`}
            borderBottom="1px solid rgba(224, 224, 224, 1)"
          >
            All Day
          </Box>
        </div>
        <div className="calendar-slots-column">
          <Box
            height={`${allDayBoxHeight}px`}
            borderBottom="1px solid rgba(224, 224, 224, 1)"
            display="flex"
          >
            <div className="border-trick-box" />
            <Box flexGrow={1} />
          </Box>
        </div>
      </Box>
      <Box display="flex" maxHeight="60vh" overflow={"scroll"} ref={scrollableDivRef}>
        <div className="time-labels-column">
          <Box height={`${HALF_HOUR_HEIGHT / 2}px`} />
          {[...Array(NUM_HOURS)].map((_, i) => (
            <Fragment key={i}>
              <Box className="time-label" height={`${HALF_HOUR_HEIGHT}px`}>
                {convertHourAndMinutesToTimeString(START_HOUR + i)}
              </Box>
              <Box className="time-label" height={`${HALF_HOUR_HEIGHT}px`}>
                {convertHourAndMinutesToTimeString(START_HOUR + i, 30)}
              </Box>
            </Fragment>
          ))}
        </div>
        <div className="calendar-slots-column">
          <Box height={`${HALF_HOUR_HEIGHT}px`} display="flex">
            <div className="border-trick-box" />
            <Box flexGrow={1} />
          </Box>
          {[...Array(NUM_HOURS)].map((_, i) => {
            return (
              <Fragment key={i}>
                {[...Array(2)].map((_, j) => {
                  const eventSlotDate = setHours(
                    setMinutes(setSeconds(selectedDate, 0), j * 30),
                    START_HOUR + i
                  );
                  const eventSlotEvents = calendarEvents.filter((event: CalendarEvent) => {
                    const diff = differenceInMinutes(
                      parseISO(event.start),
                      eventSlotDate,
                      // Rounding method options are round, ceil, floor, and trunc (default).
                      // The default rounding method results in diffs that are 1 smaller
                      // than expected; e.g., 29 rather than 30, causing a 2:30 event to be
                      // included in the 2:00 slot.
                      { roundingMethod: "round" } // ceil also works
                    );
                    // console.log("Inspecting event", event.title, event.start, event.end, diff, Math.abs(diff) < 30 && diff > 0);
                    return Math.abs(diff) < 30 && diff >= 0;
                  });
                  return (
                    <Box key={j} className="calendar-event-slot" height={`${HALF_HOUR_HEIGHT}px`}>
                      <Box className="border-trick-box" />
                      <EventSlot
                        date={eventSlotDate}
                        events={eventSlotEvents}
                        calendarId={primaryCalendarId}
                        onClick={(e) => {
                          // Only trigger if the click was actually on the slot. This check
                          // allows us to avoid stopping propagation on click events for
                          // other elements in the slot.
                          if (e.target === e.currentTarget) {
                            setInitialEventFormData({
                              title: initialEventFormData.title ?? "",
                              start: eventSlotDate,
                              end: addMinutes(eventSlotDate, 29),
                              allDay: false,
                              notes: initialEventFormData.notes ?? "",
                              calendarId: initialEventFormData.calendarId ?? primaryCalendarId,
                            });
                            setEventEditingDialogOpen(true);
                          }
                        }}
                      />
                    </Box>
                  );
                })}
              </Fragment>
            );
          })}
          {isSameDay(date, selectedDate) && getHours(date) < END_HOUR && (
            <Box
              position="absolute"
              height="1px"
              width="100%"
              bgcolor={"red"}
              top={`${currentTimeOffsetPx}px`}
              zIndex={1000}
            />
          )}
          <EventEditingDialog
            open={eventDialogOpen}
            setOpen={setEventEditingDialogOpen}
            event={initialEventFormData}
          />
        </div>
      </Box>
    </Root>
  );
};

const WeekViewer: FC<ViewerProps> = (props: ViewerProps) => {
  const { date, setDate, selectedDate, calendarEvents, session } = props;
  return null;
};

const MonthViewer: FC<ViewerProps> = (props: ViewerProps) => {
  const { date, setDate, selectedDate, calendarEvents, session } = props;
  return null;
};

const zeroToHour = (date: Date, hour: number) => {
  return setHours(setMinutes(setSeconds(date, 0), 0), hour);
};

const convertHourAndMinutesToTimeString = (hour: number, minutes = 0) => {
  const suffix = hour >= 12 ? "PM" : "AM";
  return `${((hour + 11) % 12) + 1}:${minutes.toString().padStart(2, "0")} ${suffix}`;
};
