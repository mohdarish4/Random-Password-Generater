import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let obj={
    username:"Arish",
    age: 21
  }
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-lg mb-4'>Tailwind</h1>
      <Card username='Bata'/>
      <Card username='Redcheef'/>
    </>
  )
}

export default App