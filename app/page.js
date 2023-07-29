'use client'

import Menu from "./components/Menu"
import Slider from "./components/Slider"
import CategoryFilter from './components/CategoryFilter'

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center">
        <Slider/>
        {/* <Menu/> */}
        <CategoryFilter/>
      </div>
    </>
  )
}
