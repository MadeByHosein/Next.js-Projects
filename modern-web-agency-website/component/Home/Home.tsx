import {Hero , About , Services, WhyChoose, Price} from '../Home'

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <Price />
    </div>
  )
}

export default Home