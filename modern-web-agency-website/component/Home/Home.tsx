import {Hero , About , Services, WhyChoose, Price, ClientReview, Order, Contact} from '../Home'

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
      <Contact />
    </div>
  )
}

export default Home