import {Hero , About , Services, WhyChoose, Price, ClientReview} from '../Home'

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <Price />
      <ClientReview />
    </div>
  )
}

export default Home