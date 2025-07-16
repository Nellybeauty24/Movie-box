import '../assets/css/Home.css'
import Hero from '../components/Hero'
import FeaturedMovie from '../components/FeaturedMovie'
import NewArrival from '../components/NewArrival'
import Footer from '../components/Footer'
import ExclusiveVdeos from '../components/ExclusiveVdeos'
import FeaturedCasts from '../components/FeaturedCasts'

function Home() {
  return (
    <div className='hero'>

      <Hero/>
      <FeaturedMovie />
      <NewArrival />  
      <ExclusiveVdeos />
      <FeaturedCasts />
      <Footer/>
      
    </div>
  )
}

export default Home
