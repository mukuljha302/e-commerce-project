 import React from 'react'
import MainBannner from '../components/MainBannner'
import Categories from '../components/Categories'
import BestSeller from '../components/BestSeller'
import ProductCard from '../components/ProductCard'

const Home = () => {
  return (
    <div className='mt-10'>
      <MainBannner/>
      <Categories/>
      <BestSeller/>
 
    </div>
  )
}

export default Home
