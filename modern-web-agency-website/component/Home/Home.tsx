import {Hero , About , Services, WhyChoose} from '../Home'

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Services />
      <WhyChoose />
    </div>
  )
}

export default Home