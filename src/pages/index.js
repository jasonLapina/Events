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
      <main>
        <EventList items={featuredEvents} />
      </main>
    </>
  );
}
