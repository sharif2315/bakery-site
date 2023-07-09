import React from 'react'
import ProductCard from './ProductCard'

const Menu = () => {
  return (
    <div className='max-w-[1440px] grid mx-6 md:gap-8 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-4'>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/> 
      <ProductCard/>
      <ProductCard/>
    </div>
  )
}
export default Menu