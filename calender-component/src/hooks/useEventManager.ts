import { useCallback } from 'react';
import { CalendarEvent } from '@/types';
import { getEventsForDay, getOverlappingEvents, sortEventsByDate } from '@/utils/event.utils';

export const useEventManager = (events: CalendarEvent[]) => {
  const getDayEvents = useCallback(
    (date: Date) => getEventsForDay(events, date),
    [events]
  );

  const getSortedEvents = useCallback(() => sortEventsByDate(events), [events]);

  const getEventConflicts = useCallback(
    (event: CalendarEvent) => getOverlappingEvents(event, events),
    [events]
  );

  return {
    getDayEvents,
    getSortedEvents,
    getEventConflicts,
  };
};