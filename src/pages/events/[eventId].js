import EventDetail from '../../components/event-detail/EventDetail';
import { getEventById, getFeaturedEvents } from '../../helpers/api-util';
function EventDetailPage({ event }) {
  if (!event) {
    return <p>Loading...</p>;
  }
  const { title, date, description, image, location } = event;
  console.log(event);
  return (
    <EventDetail
      title={title}
      date={date}
      description={description}
      image={image}
      location={location}
      time={date}
    />
  );
}

export default EventDetailPage;

export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);

  return {
    props: {
      event,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();
  const paths = events.map((event) => ({
    params: { eventId: event.id },
  }));
  return {
    paths,
    fallback: 'blocking',
  };
}
