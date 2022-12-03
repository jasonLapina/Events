import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/EventsSearch';

function FilteredEventsPage() {
  const [events, setEvents] = useState([]);
  const router = useRouter();
  const filterData = router.query.slug;

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch(
        'https://events-f6d4c-default-rtdb.asia-southeast1.firebasedatabase.app/events.json'
      );
      const data = await res.json();
      const loadedEvents = [];
      for (const key in data) {
        loadedEvents.push({
          id: key,
          ...data[key],
        });
      }
      const filteredEvents = loadedEvents.filter((event) => {
        const year = filterData[0];
        const month = filterData[1];
        const eventDate = new Date(event.date);
        return (
          eventDate.getFullYear() == year || eventDate.getMonth() == month - 1
        );
      });
      console.log();
      setEvents(filteredEvents);
    };
    fetchEvents();
  }, [filterData]);

  if (events.length === 0) {
    return <h1>No events found</h1>;
  }

  return (
    <>
      <EventsSearch />
      <EventList items={events} />
    </>
  );
}
export default FilteredEventsPage;
