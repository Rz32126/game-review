import { Outlet } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <div className='w-11/12 mx-auto'>
       <header>
        <Navbar></Navbar>
       </header>
       <Outlet></Outlet>
       <Footer></Footer>
    </div>
  )
}

export default App
