import { useRouter } from 'next/router';
import EventDetail from '../../components/event-detail/EventDetail';
import { getEventById } from '../../dummy-data';

function EventDetailPage() {
  const eventId = useRouter().query.eventId;
  const event = getEventById(eventId);
  if (!event) {
    return <p>No event found!</p>;
  }
  const { title, date, description, image, location } = event;
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
