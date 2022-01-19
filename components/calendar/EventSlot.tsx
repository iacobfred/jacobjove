import { calendarEventFragment } from "@/graphql/fragments";
import { CREATE_CALENDAR_EVENT, UPDATE_CALENDAR_EVENT } from "@/graphql/mutations";
import { CalendarEvent } from "@/graphql/schema";
import { gql, useMutation } from "@apollo/client";
import { styled } from "@mui/material/styles";
import { addMinutes, differenceInMinutes, parseISO } from "date-fns";
import { useSession } from "next-auth/react";
import { FC, MouseEventHandler, useState } from "react";
import { useDrop } from "react-dnd";

interface EventSlotProps {
  date: Date;
  view: "day" | "week";
  events?: CalendarEvent[];
  defaultCalendarId: number;
  onClick?: MouseEventHandler<HTMLDivElement>;
  past?: boolean;
}

const Root = styled("div")(({ theme }) => ({
  display: "flex",
  position: "relative",
  flexGrow: 1,
  "&.droppable": {
    backgroundColor: theme.palette.grey[500], // "lightgray",
  },
  "&.hovered": {
    backgroundColor: theme.palette.action, // TODO
    cursor: "pointer",
  },
  "& .event": {
    position: "absolute",
    border: "1px solid white",
    borderRadius: "3px",
    paddingTop: "0.25rem",
    paddingBottom: "0.25rem",
    paddingLeft: "0.5rem",
    maxWidth: "92%",
    "& *": {
      lineHeight: "1.1",
    },
  },
}));

const DEFAULT_EVENT_LENGTH_IN_MINUTES = 29;

// TODO: https://www.apollographql.com/blog/apollo-client/caching/when-to-use-refetch-queries/

const EventSlot: FC<EventSlotProps> = (props: EventSlotProps) => {
  const { date, view, defaultCalendarId, onClick, past } = props;
  const { data: session } = useSession();
  const [hovered, setHovered] = useState(false);
  const [rescheduleEvent, { loading: loadingUpdateCalendarEvent }] = useMutation<{
    updateCalendarEvent: CalendarEvent;
  }>(UPDATE_CALENDAR_EVENT);
  const [addEvent, { loading: loadingCreateCalendarEvent }] = useMutation<{
    createCalendarEvent: CalendarEvent;
  }>(CREATE_CALENDAR_EVENT, {
    update(cache, { data }) {
      const { createCalendarEvent } = data || {};
      if (createCalendarEvent) {
        cache.modify({
          fields: {
            calendarEvents(existingEvents = []) {
              const newCalendarEventRef = cache.writeFragment({
                data: createCalendarEvent,
                fragment: gql`
                  fragment NewCalendarEvent on CalendarEvent {
                    ...CalendarEventFragment
                  }
                  ${calendarEventFragment}
                `,
                fragmentName: "NewCalendarEvent",
              });
              return [...existingEvents, newCalendarEventRef];
            },
          },
        });
      }
    },
  });
  const loading = loadingCreateCalendarEvent || loadingUpdateCalendarEvent;
  const [{ isOver, canDrop }, dropRef] = useDrop(
    () => ({
      accept: ["event", "action", "routine", "task"],
      canDrop: () => !loading,
      drop: (
        item: Partial<CalendarEvent> & {
          durationInMinutes?: number;
          type: "event" | "action" | "routine" | "task";
        } & Pick<CalendarEvent, "title">
      ) => {
        if (!session) return;
        const { type, durationInMinutes, ...itemData } = item;
        if (type === "event" && itemData.start && itemData.end) {
          const oldStart = parseISO(itemData.start);
          const oldEnd = parseISO(itemData.end);
          const newStart = date.toISOString();
          const newEnd = addMinutes(
            date,
            durationInMinutes ?? differenceInMinutes(oldEnd, oldStart)
          ).toISOString();
          if (itemData.id) {
            rescheduleEvent({
              variables: {
                where: {
                  id: itemData.id,
                },
                data: {
                  start: { set: newStart },
                  end: { set: newEnd || undefined },
                },
              },
              optimisticResponse: {
                updateCalendarEvent: {
                  __typename: "CalendarEvent",
                  ...(itemData as CalendarEvent),
                },
              },
            });
          }
        } else {
          const start = date;
          const end = addMinutes(date, durationInMinutes ?? DEFAULT_EVENT_LENGTH_IN_MINUTES);
          let { scheduleId, calendarId, ...calendarEventData } = itemData;
          calendarId = calendarId ?? defaultCalendarId;
          scheduleId = scheduleId ?? null;
          if (!calendarId) {
            try {
              calendarId = session.user.settings.defaultCalendarId;
            } catch (err) {
              console.error(err);
            }
          }
          calendarEventData = {
            start: start.toISOString(),
            end: end.toISOString(),
            allDay: false,
            ...calendarEventData, // This overrides the default values specified above.
          };
          const calendarEventDataWithConnections = {
            ...calendarEventData,
            calendar: { connect: { id: calendarId } },
            schedule: scheduleId ? { connect: { id: scheduleId } } : undefined,
          };
          addEvent({
            variables: {
              data: calendarEventDataWithConnections,
            },
            optimisticResponse: {
              createCalendarEvent: {
                __typename: "CalendarEvent",
                id: -1,
                uid: "tmp-id",
                calendarId,
                scheduleId,
                createdAt: new Date(),
                updatedAt: new Date(),
                archivedAt: null,
                ...(calendarEventData as Omit<
                  CalendarEvent,
                  "__typename" | "id" | "uid" | "calendarId" | "createdAt"
                >),
              },
            },
          });
        }
        // TODO: open event dialog
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      }),
    }),
    [date]
  );
  const classNames = [];
  if (isOver && canDrop) {
    classNames.push("droppable");
  }
  if (hovered) {
    classNames.push("hovered");
  }
  if (past) {
    classNames.push("past");
  }
  return (
    <Root
      ref={dropRef}
      className={classNames.join(" ")}
      onClick={onClick}
      onMouseOver={(e) => {
        if (e.target === e.currentTarget) {
          setHovered(true);
        }
      }}
      onMouseOut={() => {
        setHovered(false);
      }}
    />
  );
};

export default EventSlot;
