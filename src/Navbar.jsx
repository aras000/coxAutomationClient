// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'
import { NavLink } from 'react-router';
function Navbar() {
  // const [count, setCount] = useState(0)

  return (
    <>
     
        <div className="flex justify-center">
          <NavLink to="/" className="btn btn-lg bg-green-500 hover:bg-green-600 text-white">A</NavLink>
          <NavLink to="/about" className="btn btn-lg bg-green-500 hover:bg-green-600 text-white">about</NavLink>
          <NavLink to="/contact" className="btn btn-lg bg-green-500 hover:bg-green-600 text-white">C</NavLink>

        </div>
        
    </>
  )
}

export default Navbar
