import { MongoClient } from 'mongodb';

import MeetupList from "../components/Meetups/MeetupList";


function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export async function getStaticProps() {
  // fetch data from an API
  const client = await MongoClient.connect(
    'mongodb+srv://martinsgabriel99:biel1956@cluster0.ntrwp.mongodb.net/meetups?retryWrites=true&w=majority'
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}


export default HomePage;