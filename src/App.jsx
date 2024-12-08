import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <div className='w-11/12 mx-auto'>
       <header>
       <ToastContainer />
        <Navbar></Navbar>
       </header>
       <ToastContainer />
       <Outlet></Outlet>
       <Footer></Footer>
    </div>
  )
}

export default App
