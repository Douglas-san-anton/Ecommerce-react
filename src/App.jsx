import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        Collections
        Men
        Women
        About
        Contact

        Sneaker Company

        Fall Limited Edition Sneakers

        These low-profile sneakers are your perfect casual wear companion. Featuring a 
        durable rubber outer sole, they’ll withstand everything the weather can offer.

        $125.00
        50%
        $250.00

        0
        Add to cart
    </div>
  )
}

export default App
