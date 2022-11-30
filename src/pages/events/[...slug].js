import { useRouter } from 'next/router';
import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/EventsSearch';
import { getFilteredEvents } from '../../dummy-data';
function FilteredEventsPage() {
  const filterData = useRouter().query.slug;
  if (!filterData) {
    return <p>Loading...</p>;
  }
  const year = filterData[0];
  const month = filterData[1];
  const filteredEvents = getFilteredEvents({ year, month });
  if (filteredEvents.length === 0) {
    return (
      <>
        <EventsSearch />
        <h1>No events found</h1>;
      </>
    );
  }
  return (
    <>
      <EventsSearch />
      <EventList items={filteredEvents} />
    </>
  );
}
export default FilteredEventsPage;
