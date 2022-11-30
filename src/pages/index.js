import Head from 'next/head';
import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/EventList';

export default function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
    <>
      <Head>
        <title>Our featured events</title>
      </Head>
      <h1>Featured Events</h1>
      <EventList items={featuredEvents} />
    </>
  );
}
