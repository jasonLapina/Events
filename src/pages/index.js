import Head from 'next/head';
import { userAgentFromString } from 'next/server';
import { useEffect } from 'react';
import EventList from '../components/events/EventList';
import { getFeaturedEvents } from '../helpers/api-util';
export default function Home({ events }) {
  return (
    <>
      <Head>
        <title>Our featured events</title>
      </Head>
      <h1>Featured Events</h1>
      <EventList items={events} />
    </>
  );
}

export async function getStaticProps() {
  const events = await getFeaturedEvents();
  return {
    props: {
      events,
    },
    revalidate: 1800,
  };
}
