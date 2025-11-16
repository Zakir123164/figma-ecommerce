import React from 'react'
import Banner from '../components/Banner'
import Arrival from '../components/Arrival'
import TopSell from '../components/TopSell'
import Style from '../components/Style'
import Review from '../components/Review'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Arrival/>
      <TopSell/>
       <Style/>
       <Review/>
    </div>
  )
}

export default Home;
