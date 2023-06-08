import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProjectCard from './components/ProjectCard'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Hero />
      <ProjectCard />
    </div>
  )
}

export default App
