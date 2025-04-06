import React from 'react'
import ProductCard from './ProductCard'
import { useAppContext } from '../context/AppContext'
import Navbar from './Navbar';
import Categories from './Categories';
const BestSeller = () => {
 const {products}=useAppContext();
 
  return (
    <div className='mt-16'>
        <p className='text-2xl md:text-3xl font-medium'>Best Seller</p>
        <div>
            <ProductCard products={products[0]}/>
         </div>
      
    </div>
  )
}

export default BestSeller
