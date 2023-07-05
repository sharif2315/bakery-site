import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'

function App() {

  return (
    <>
      <div className='flex flex-col items-center'>
        <Hero />
        <Navbar />
        <Menu />
      </div>

    </>
  )
}

export default App
