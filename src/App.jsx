import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import Login from './Components/login-signup/Login'
import Signup from './Components/login-signup/Signup'
import Home from './Components/Dashbord/Home'
import Profile from './Components/Dashbord/Profile'
import Navbar from './Components/Dashbord/Navbar'
import { StoreProvider } from './Components/StoreContext'


const App = () => {
  return (
    <StoreProvider>
      <ToastContainer
        position='top-center'
        autoClose={1500}
        closeButton={false}
        hideProgressBar={true}
        pauseOnHover={false}
        draggable={true}
      />

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/home' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  )
}

export default App
