import { useRouter } from 'next/router';
import { useState } from 'react';
import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/EventsSearch';
import { getAllEvents } from '../../dummy-data';

function AllEventsPage() {
  const allEvents = getAllEvents();
  const router = useRouter();

  return (
    <>
      <EventsSearch />
      <EventList items={allEvents} />
    </>
  );
}

export default AllEventsPage;

//     router.push(`/events/${year}/${month}`);
