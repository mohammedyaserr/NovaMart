import React from 'react'
import Login from './Components/login-signup/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './Components/login-signup/Signup'
import Dashbord from './Components/Dashbord/Dashbord'
import { ToastContainer } from 'react-toastify'

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
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/home' element={<Dashbord />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
