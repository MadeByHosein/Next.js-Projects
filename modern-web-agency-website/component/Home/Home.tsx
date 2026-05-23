import {Hero , About , Services, WhyChoose, Price, ClientReview, Order} from '../Home'

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <Price />
      <ClientReview />
      <Order />
    </div>
  )
}

export default Home