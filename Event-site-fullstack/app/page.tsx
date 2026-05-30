import EventCard from "@/Components/EventCard";
import ExploreBtn from "@/Components/ExploreBtn";


const events = [
  {
    image: '/images/event1.jpg',
    title: 'International Conference on AI and Data',
    slug: 'ai-data-conference-2024',
    location: 'Milad Tower Conference Center, Tehran',
    date: '2024-10-15',
    time: '09:00'
  },
  {
    image: '/images/event2.jpg',
    title: 'Tehran Autumn Music Festival',
    slug: 'tehran-autumn-music-festival',
    location: 'SaadatAbad Palace, Tehran',
    date: '2024-11-05',
    time: '18:00'
  },
  {
    image: '/images/event3.jpg',
    title: 'Iran Startup Achievements Expo',
    slug: 'iran-startup-expo-2024',
    location: 'Tehran International Fairground',
    date: '2024-12-01',
    time: '10:00'
  },
  {
    image: '/images/event4.jpg',
    title: 'Contemporary Art Group Exhibition',
    slug: 'contemporary-art-exhibition-2024',
    location: 'Saless Gallery, Tehran',
    date: '2024-09-25',
    time: '16:00'
  },
  {
    image: '/images/event5.jpg',
    title: 'Advanced Web Development Webinar (React & Next.js)',
    slug: 'advanced-web-dev-webinar',
    location: 'Online',
    date: '2024-10-01',
    time: '19:00'
  }
];



function Home() {
  return <>
    <section>
      <h1 className="text-center mt-5">The Hub for Every Dev <br/> Event You Can't Miss!</h1>
      <p className="text-center mt-5">hackathons, Meetups, and Conferences, All in One Place</p>
    </section>
    <ExploreBtn/>

    <div className="mt-20 space-y-7 px-10">
      <h3>Featured Events</h3>

      <ul className="events">
        {events.map((event)=> (
          <li key={event.title}>
            <EventCard {...event}/>
          </li>
        ))}    
      </ul>

    </div>


    </>
    }

export default Home