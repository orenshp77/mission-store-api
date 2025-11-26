
import './Layout.css'
import Routing from '../routing/Routing';
import Navbar from '../navbar/Navbar';

export default function Layout() {
  return (
    <div className='Layout'>
      <nav><Navbar /></nav>
      <main>
        <Routing />
      </main>
      
    </div>
  )
}

