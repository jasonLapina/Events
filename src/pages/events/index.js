import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/EventsSearch';
import { getAllEvents } from '../../helpers/api-util';
function AllEventsPage({ allEvents }) {
  return (
    <>
      <EventsSearch />
      <EventList items={allEvents} />
    </>
  );
}

export default AllEventsPage;

export async function getStaticProps() {
  const allEvents = await getAllEvents();
  return {
    props: { allEvents },
    revalidate: 1800,
  };
}
