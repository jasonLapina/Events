import { useRouter } from 'next/router';
import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/EventsSearch';
import { getFilteredEvents } from '../../helpers/api-util';

function FilteredEventsPage({ filteredEvents }) {
  return (
    <>
      <EventsSearch />
      <EventList items={filteredEvents} />
    </>
  );
}
export default FilteredEventsPage;

export async function getServerSideProps(context) {
  const { params } = context;
  const filterData = params.slug;
  const year = filterData[0];
  const month = filterData[1];
  const filteredEvents = await getFilteredEvents({ year, month });

  if (!filteredEvents || filteredEvents.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: { filteredEvents },
  };
}
