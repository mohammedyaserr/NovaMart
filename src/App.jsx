import React from 'react'
import Login from './Components/login-signup/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './Components/login-signup/Signup'
import Dashbord from './Components/Dashbord/Navbar'
import { ToastContainer } from 'react-toastify'
import Profile from './Components/Dashbord/Profile'
import Cart from './Components/Dashbord/Cart'
import Home from './Components/Dashbord/Home'
import { StoreProvider } from './Components/Context'

const App = () => {
  return (
    <>
      <ToastContainer
        position='top-center'
        autoClose='1500'
        closeButton={false}
        hideProgressBar={true}
        pauseOnHover={false}
        draggable={true}
      />

      <StoreProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/home' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </StoreProvider>
    </>
  )
}

export default App
