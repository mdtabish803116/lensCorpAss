import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='w-full' >
      <Navbar/>
      <Home/>
      <About/>
      <Services/>
    </main>
  )
}

export default App
