 import React from 'react'
import MainBannner from '../components/MainBannner'
import Categories from '../components/Categories'
import BestSeller from '../components/BestSeller'
import ProductCard from '../components/ProductCard'
import BottomBanner from '../components/BottomBanner'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (
    <div className='mt-10'>
      <MainBannner/>
      <Categories/>
      <BestSeller/>
      <BottomBanner/>
      <Newsletter/>
    </div>
  )
}

export default Home
