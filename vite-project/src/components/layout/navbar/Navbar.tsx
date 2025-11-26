import { NavLink } from 'react-router-dom'
import './Navbar.css'
export default function Navbar() {
  return (
    <div className='Navbar'>
        <h3>logo</h3>
        <div className="nab-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products" >Products</NavLink>
        </div>
    </div>
  )
}
