import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NewProductForm from './components/NewProductForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <NewProductForm/>
  )
}

export default App
